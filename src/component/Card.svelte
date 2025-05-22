<script lang="ts">
  export let imgSrc: string = '';
  export let title: string = '';
  export let description: string = '';
</script>

<div
  class="flex w-72 min-w-72 snap-center snap-normal flex-col overflow-hidden rounded-xl border border-gray-300 bg-orange-300 shadow-lg"
>
  {#if imgSrc}
    <img src={imgSrc} alt={title} loading="lazy" class="h-36 object-cover" />
  {/if}
  <div class="flex flex-col gap-2 px-4 py-4">
    <p class="text-md line-clamp-1 overflow-clip text-left font-semibold">{title}</p>
    <p class="line-clamp-3 overflow-clip text-left text-sm font-light">{description}</p>
  </div>
</div>
