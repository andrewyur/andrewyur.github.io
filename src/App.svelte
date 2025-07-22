<script lang="ts">
  import { onMount } from 'svelte';
  import Content from './lib/Content.svelte';
  import Toy from './lib/Toy.svelte';

  let toy: Toy;
  let pointerEvents = $state(false);
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
  });
</script>

<main>
  <Content {pointerEvents} />
  <Toy bind:this={toy} />
</main>

<style>
</style>
