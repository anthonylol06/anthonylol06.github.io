<script lang="ts">
  import Card from './Card.svelte';

  type CardData = {
    imgSrc?: string;
    title: string;
    description: string;
  };
  
  export let cards: CardData[] = [];
</script>

<div
  class="hide-scroll-bar relative flex w-full snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto py-4"
>
  <div class="shrink-0 md:snap-center">
    <div class="w-4 shrink-0 md:w-32"></div>
  </div>
  {#each cards as card}
    <Card {...card} />
  {/each}
  <div class="shrink-0 md:snap-center">
    <div class="w-4 shrink-0 md:w-32"></div>
  </div>
</div>

<style>
  .hide-scroll-bar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .hide-scroll-bar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
</style>
