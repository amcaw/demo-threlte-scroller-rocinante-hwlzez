<script>
  import { Canvas } from '@threlte/core';
  import {
    useProgress
  } from '@threlte/extras';
  import { fade } from 'svelte/transition';
  import { fractionalUpdates, globalShipPosition, globalShipRotation } from '$lib/settings';
  import Scroller from "@sveltejs/svelte-scroller";
  import Scene from '$lib/Scene.svelte';
  import ScrollerBar from '$lib/ScrollerBar.svelte';
  import SettingsBar from '$lib/SettingsBar.svelte';
  import TextContent from '$lib/TextContent.svelte';
  
  let index, offset, progress;  

  const { 
    progress: loadingProgress, // Readable<number> - normalized (0-1) loading progress
	} = useProgress()

</script>

<Scroller bind:index bind:offset bind:progress threshold={0.5}>
  <div slot="background" class="canvas-wrapper">
    {#if $loadingProgress < 1}
    <div class="loading-overlay" out:fade>
      <h1>LOADING...</h1>
      <div class="loading-box">
        <div class="loading-bar" style="transform: scaleX({$loadingProgress});" />
      </div>
    </div>
    {/if}
    <Canvas>
      <Scene {index} {offset} {progress}/>
    </Canvas>
  </div>
  <div slot="foreground" class="content">
    <div class="scroller-data">
      <ScrollerBar {index} {offset} {progress} />
      <!-- <div class="progress-box">
        <div class="progress-bar" style="transform: scaleX({progress});"/>
      </div>
      <p>INDEX: {index}</p>
      <p>OFFSET: {offset?.toFixed(2)}</p>
      <p>PROGRESS: {progress?.toFixed(2)}</p> -->
    </div>
    <div class="gap" />
      <TextContent {index} {offset} assetsLoaded={$loadingProgress >= 1}/>
    <div class="settings">
      <SettingsBar />
    </div>
  </div>
</Scroller>


<style>
  .canvas-wrapper {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #000000;
    overflow: hidden;
  }

  /* Prevents weird initial offset value from svelte-scroller */
  .gap {
    height: 50vh;
  }

  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FAFBFC;
    flex-direction: column;
  }

  .scroller-data, .settings {
    position: fixed;
    width: 100%;
    z-index: 1;
  }
  .scroller-data {
    top: 0;
  }

  .settings {
    bottom: 0;
  }
  
  .loading-box {
    width: 25%;
    height: 2rem;
    background-color: #000000;
  }
  .loading-bar {
    height: 2rem;
    background-color: #32cd32;
    transform-origin: left;
    transition: transform 0.2s linear;
  }

</style>