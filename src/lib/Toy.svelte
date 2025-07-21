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

    export function fireEvent(e: MouseEvent | TouchEvent): boolean {
        // console.log(`recieved mouse event: ${e.type}`);
        switch (e.type) {
            case 'mousemove':
            case 'touchmove':
                // @ts-expect-error
                mouse?.mousemove(e);
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

    const startWidth = window.innerWidth * 0.75;
    const startHeight = window.innerHeight / 2;

    const boxes = [
        Bodies.rectangle(startWidth, startHeight + 30, 40, 40, {
            render: {
                fillStyle: '#fff5da',
            },
            angle: 30,
        }),
        Bodies.rectangle(startWidth - 30, startHeight, 50, 60, {
            render: {
                fillStyle: '#fff5da',
            },
        }),
        Bodies.rectangle(startWidth + 15, startHeight, 50, 30, {
            render: {
                fillStyle: '#fff5da',
            },
            angle: 120,
        }),
        Bodies.rectangle(startWidth, startHeight - 10, 50, 70, {
            render: {
                fillStyle: '#fff5da',
            },
        }),
    ];
    const container = [
        Bodies.rectangle(
            window.innerWidth / 2,
            window.innerHeight + 150,
            window.innerWidth,
            300,
            { isStatic: true },
        ),
        Bodies.rectangle(window.innerWidth / 2, -150, window.innerWidth, 300, {
            isStatic: true,
        }),
        Bodies.rectangle(
            -150,
            window.innerHeight / 2,
            300,
            window.innerHeight,
            { isStatic: true },
        ),
        Bodies.rectangle(
            window.innerWidth + 150,
            window.innerHeight / 2,
            300,
            window.innerHeight,
            { isStatic: true },
        ),
    ];

    onMount(() => {
        const engine = Engine.create();
        const render = Render.create({
            element: parent,
            engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: 'transparent',
                wireframeBackground: 'transparent',
                wireframes: false,
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
    });
</script>

<div bind:this={parent}></div>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100dvh;
        z-index: 0;
    }

    /* :global(canvas) {
        pointer-events: none;
    } */
</style>
