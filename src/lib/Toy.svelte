<script lang="ts">
    import {
        Engine,
        Render,
        Bodies,
        Body,
        Vertices,
        Composite,
        Runner,
        Mouse,
        MouseConstraint,
        Events,
    } from 'matter-js';
    import { onMount } from 'svelte';

    let mouseConstraint: MouseConstraint | null = null;
    let mouse: Mouse | null = null;

    let interacted = $state(false);
    let showHint = $state(false);

    setTimeout(() => {
        showHint = !interacted;
    }, 10000);

    export function fireEvent(e: MouseEvent | TouchEvent): boolean {
        // console.log(`recieved mouse event: ${e.type}`);
        switch (e.type) {
            case 'mousemove':
            case 'touchmove':
                if (mouseConstraint?.body) {
                    // @ts-expect-error
                    mouse?.mousemove(e);
                }
                break;
            case 'mousedown':
            case 'touchstart':
                // @ts-expect-error
                mouse?.mousedown(e);
                break;
            case 'mouseup':
            case 'touchend':
                // @ts-expect-error
                mouse?.mouseup(e);
                break;
        }
        return Boolean(mouseConstraint?.body);
    }

    let parent: HTMLDivElement;
    let renderer: Render;
    let engine: Engine;
    let container = {
        top: null as Body | null,
        left: null as Body | null,
        right: null as Body | null,
        bottom: null as Body | null,
    };

    const handleResize = (e: UIEvent) => {
        if (renderer) {
            const w = window.innerWidth;
            const h = window.innerHeight;

            renderer.bounds.max.x = w;
            renderer.bounds.max.y = h;
            renderer.options.width = w;
            renderer.options.height = h;
            renderer.canvas.width = w;
            renderer.canvas.height = h;

            if (
                container.top &&
                container.bottom &&
                container.left &&
                container.right
            ) {
                Body.setPosition(container.top, { x: w / 2, y: h + 151 });
                Body.setPosition(container.bottom, { x: w / 2, y: -151 });
                Body.setPosition(container.left, { x: -151, y: h / 2 });
                Body.setPosition(container.right, { x: w + 151, y: h / 2 });

                const xWidth = w + 600;
                const xHeight = 300;
                const yWidth = 300;
                const yHeight = h;

                Body.setVertices(
                    container.top,
                    Vertices.fromPath(
                        `'L 0 0 L ${xWidth} 0 L ${xWidth} ${xHeight} L 0 ${xHeight}`,
                        container.top,
                    ),
                );
                Body.setVertices(
                    container.bottom,
                    Vertices.fromPath(
                        `'L 0 0 L ${xWidth} 0 L ${xWidth} ${xHeight} L 0 ${xHeight}`,
                        container.bottom,
                    ),
                );
                Body.setVertices(
                    container.left,
                    Vertices.fromPath(
                        `'L 0 0 L ${yWidth} 0 L ${yWidth} ${yHeight} L 0 ${yHeight}`,
                        container.left,
                    ),
                );
                Body.setVertices(
                    container.right,
                    Vertices.fromPath(
                        `'L 0 0 L ${yWidth} 0 L ${yWidth} ${yHeight} L 0 ${yHeight}`,
                        container.right,
                    ),
                );

                // update the render bounds to fit the scene
                Render.lookAt(
                    renderer,
                    Object.values(container).filter((b) => b !== null),
                    {
                        x: -301,
                        y: -301,
                    },
                );
            }
        }
    };

    onMount(async () => {
        window.addEventListener('resize', handleResize);

        await new Promise(requestAnimationFrame); // wait for dom to paint before getting height of parent element

        const w = window.innerWidth;
        const h = window.innerHeight;
        const startWidth = w * 0.75;
        const startHeight = h / 2;
        const render = {
            fillStyle: '#fff5da',
        };

        container.top = Bodies.rectangle(w / 2, h + 151, w + 600, 300, {
            isStatic: true,
        });
        container.bottom = Bodies.rectangle(w / 2, -151, w + 600, 300, {
            isStatic: true,
        });
        container.left = Bodies.rectangle(-151, h / 2, 300, h, {
            isStatic: true,
        });
        container.right = Bodies.rectangle(w + 151, h / 2, 300, h, {
            isStatic: true,
        });

        let boxes = [
            Bodies.rectangle(startWidth, startHeight + 30, 40, 40, {
                render,
                angle: 30,
            }),
            Bodies.rectangle(startWidth - 30, startHeight, 50, 60, {
                render,
            }),
            Bodies.rectangle(startWidth + 15, startHeight, 50, 30, {
                render,
                angle: 120,
            }),
            Bodies.rectangle(startWidth, startHeight - 10, 50, 70, {
                render,
            }),
        ];

        engine = Engine.create();

        // warm up frames
        for (let i = 0; i < 60; i++) {
            Engine.update(engine, 1000 / 60);
        }

        renderer = Render.create({
            element: parent,
            engine,
            options: {
                width: w,
                height: h,
                background: 'transparent',
                wireframeBackground: 'transparent',
                wireframes: false,
                hasBounds: true,
                // showPerformance: true,
            },
            bounds: {
                min: {
                    x: 0,
                    y: 0,
                },
                max: {
                    x: window.innerWidth,
                    y: window.innerHeight,
                },
            },
        });

        mouse = Mouse.create(renderer.canvas);
        mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(engine.world, [
            ...Object.values(container).filter((o) => o !== null),
            ...boxes,
            mouseConstraint,
        ]);
        renderer.mouse = mouse;

        Render.run(renderer);
        const runner = Runner.create({});

        Runner.run(runner, engine);

        Events.on(mouseConstraint, 'startdrag', () => {
            interacted = true;
            showHint = false;
        });
    });

    onMount(() => {
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<div bind:this={parent}></div>

<svg viewBox="0 0 24 24" class:opaque={showHint}
    ><path
        fill="black"
        d="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z"
    ></path></svg
>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100lvh;
        z-index: 0;
        -webkit-user-select: none;
        user-select: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    :global(canvas) {
        position: absolute;
        bottom: 0;
    }

    svg {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1;
        width: 50px;
        height: 50px;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    .opaque {
        opacity: 1 !important;
    }

    /* :global(canvas) {
        pointer-events: none;
    } */
</style>
