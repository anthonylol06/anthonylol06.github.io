<script lang="ts">
  export let title: string = '';
  export let company: string = '';
  export let startDate: Date = new Date();
  export let endDate: Date = new Date();
  export let location: string = '';
  export let descriptions: string[] = [];

  function formatDate(date: Date) {
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getUTCFullYear()}`;
  }
</script>

<div class="flex flex-col gap-2">
  <h1 class="text-left text-lg font-bold">{title}</h1>
  <p class="text-md text-left font-medium">{company}</p>
  <p class="text-md text-left font-medium">
    {formatDate(startDate)} - {formatDate(endDate)}
    <span class="text-sm font-light">{location}</span>
  </p>
  <div class="flex flex-col gap-2">
    {#each descriptions as description}
      <p class="text-base font-light">{description}</p>
    {/each}
  </div>
</div>
