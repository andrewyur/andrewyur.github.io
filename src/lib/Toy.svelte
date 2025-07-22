<script lang="ts">
    import {
        Engine,
        Render,
        Bodies,
        Composite,
        Runner,
        Mouse,
        MouseConstraint,
    } from 'matter-js';
    import { onMount } from 'svelte';

    let mouseConstraint: MouseConstraint | null = null;
    let mouse: Mouse | null = null;

    window.addEventListener('resize', (e) => {
        console.log('resize');
    });

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

    function createBoxes() {
        const startWidth = window.innerWidth * 0.75;
        const startHeight = window.innerHeight / 2;
        const render = {
            fillStyle: '#fff5da',
        };

        return [
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
    }

    function createBoundaries() {
        const w = window.innerWidth;
        const h = window.innerHeight;

        return [
            Bodies.rectangle(w / 2, h + 151, w, 300, { isStatic: true }),
            Bodies.rectangle(w / 2, -151, w, 300, { isStatic: true }),
            Bodies.rectangle(-151, h / 2, 300, h, { isStatic: true }),
            Bodies.rectangle(w + 151, h / 2, 300, h, { isStatic: true }),
        ];
    }

    let container = createBoundaries();
    let boxes = createBoxes();

    onMount(() => {
        const engine = Engine.create();

        // warm up frames
        for (let i = 0; i < 60; i++) {
            Engine.update(engine, 1000 / 60);
        }

        const render = Render.create({
            element: parent,
            engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: 'transparent',
                wireframeBackground: 'transparent',
                wireframes: false,
                // showPerformance: true,
            },
        });

        mouse = Mouse.create(render.canvas);
        mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(engine.world, [...container, ...boxes, mouseConstraint]);
        render.mouse = mouse;

        Render.run(render);
        const runner = Runner.create({});

        Runner.run(runner, engine);

        function resizeCanvas() {
            Composite.remove(engine.world, [...container, ...boxes]);
            container = createBoundaries();
            boxes = createBoxes();
            Composite.add(engine.world, [...boxes, ...container]);

            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
            render.options.width = window.innerWidth;
            render.options.height = window.innerHeight;
        }

        let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
        function debounceResizeCanvas() {
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
            timeout = setTimeout(() => {
                clearTimeout(timeout);
                timeout = undefined;
                resizeCanvas();
            }, 700);
        }

        window.addEventListener('resize', debounceResizeCanvas);
    });
</script>

<div bind:this={parent}></div>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        -webkit-user-select: none;
        user-select: none;
    }

    /* :global(canvas) {
        pointer-events: none;
    } */
</style>
