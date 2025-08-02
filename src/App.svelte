<script lang="ts">
  import { onMount } from 'svelte';
  import Content from './lib/Content.svelte';
  import Toy from './lib/Toy.svelte';

  let toy: Toy;
  let pointerEvents = $state(false);
  let visible = $state(false);
  // $inspect(pointerEvents);

  onMount(() => {
    document.body.addEventListener(
      'mousemove',
      (e) => (pointerEvents = toy.fireEvent(e)),
      {
        passive: true,
      },
    );
    document.body.addEventListener(
      'mousedown',
      (e) => (pointerEvents = toy.fireEvent(e)),
      {
        passive: true,
      },
    );
    document.body.addEventListener(
      'mouseup',
      (e) => (pointerEvents = toy.fireEvent(e)),
      {
        passive: true,
      },
    );
    document.body.addEventListener(
      'touchmove',
      (e) => (pointerEvents = toy.fireEvent(e)),
      {
        passive: false,
      },
    );
    document.body.addEventListener(
      'touchstart',
      (e) => (pointerEvents = toy.fireEvent(e)),
      {
        passive: true,
      },
    );
    document.body.addEventListener(
      'touchend',
      (e) => (pointerEvents = toy.fireEvent(e)),
      {
        passive: true,
      },
    );
    setTimeout(() => (visible = true), 200);
  });
</script>

<main class={visible ? 'visible' : null}>
  <Content {pointerEvents} />
  <Toy bind:this={toy} />
</main>

<style>
  main {
    opacity: 0;
    transition: opacity 0.3s ease;
    width: 100%;
  }

  .visible {
    opacity: 1;
  }
</style>
