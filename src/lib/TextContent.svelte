<script>
  import { fade } from 'svelte/transition';
  import { sections } from '$lib/text';
  export let index;
  export let offset;
  export let assetsLoaded;

</script>


  {#each sections as section, idx}
    <section class="section-{section.title.replaceAll(' ', '-')}">
    {#if index === idx && assetsLoaded}
    <div class="text-box" transition:fade>
      <h1>{section.title}</h1>
      <p class="quote">{section.quote ? `"${section.quote || ''}"`: ''}</p>
      <p class="text">{section.text}</p>
      {#if section.tools}
          <ul>
        {#each section.tools as tool}
          <li class="tool-item">
            <a href="{tool.link}">{tool.text}</a>
          </li>
        {/each}
        </ul>
      {/if}
      {#if section.modelInfo}
        <div class="model-info">
          <h2>Model Attribution:</h2>
          <p>Author: {section.modelInfo.Author}</p>
          <p>License: {section.modelInfo.License}</p>
          <p>Source: <a href="{section.modelInfo.Source}">{section.modelInfo.Source}</a></p>
          <p>Title: {section.modelInfo.Title}</p>
        </div>
      {/if}
      {#if section.link}
        <a href="{section.link}" class="link">Source</a>
      {/if}
      </div>
    {/if}
    </section>
  {/each}  

<style>
  
  section {
    height: 80vh;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    /* DEBUG COLORS */
    /* background: #ffffff55; */
    /* border: 3px solid cyan; */
  }

  .text-box {
    max-width: 600px;
    border: 2px solid white;
    color: #ffffff;
    background-color: #00000088;
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  p.quote {
    font-style: italic;
    font-size: 1.25rem;
    font-weight: 200;
    color: #ddd;
  }

  .text-box h1 {
    font-size: 4rem;
  }

  section.active {
    border: 2px solid lime;
  }
  .section-The-Expanse .text-box {
    margin: 0 0 0 auto;
  }
  .section-Rocinante  .text-box{
    margin: 0 auto;
  }
  .section-Ship-Description  .text-box{
    margin: 0 0 0 0;
  }
  .section-Armament  .text-box{
    margin: 0 0 0 auto;
  }
  .section-Demo-Tools  .text-box{
    margin: 0 0 0 auto;
  }

  li.tool-item {
    font-family: 'Fira-code', monospace;
    background-color: #ff4700;
    width: 10rem;
    padding: 0.375rem;
    margin: 0.125rem 0;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
  }

  .tool-item a {
    color: #ffffff;
  }

  .model-info {
    background: #000000aa;
    padding: 0.75rem;
    font-size: 0.875rem;
  }
  .model-info p {
    margin: 0.25rem 0;
  }
</style>