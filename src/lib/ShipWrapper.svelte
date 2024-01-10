<script>
  import { cubicInOut } from 'svelte/easing';
  import {
    T,
    useThrelte,
  } from '@threlte/core';
  import { tweenedSequence } from 'svelte-sequence';
  import { fractionalUpdates, globalShipPosition, globalShipRotation } from '$lib/settings';
  import Roci from "$lib/Roci.svelte";
  const { camera, renderer } = useThrelte();

  export let activeIndex = 0;
  export let progress;
  export let offset;

  const indexedPositionList = [
    [ -4 * $camera.aspect, 3, 3],
    [ -2 * $camera.aspect, 0, 6],
    [ 4 * $camera.aspect, 0, 0],
    [ -1 * $camera.aspect, 3, 5],
    [ 0, 0, 10],
    [ 0, 0, 10],
    [ -4 * $camera.aspect, 3, 3],
  ]
  const indexedRotationList = [
    [ Math.PI / 2, 0, 0 ],
    [ 0, Math.PI / 2, 0],
    [ -Math.PI / 2, 0, Math.PI / 4 ],
    [ Math.PI / 10, 0, 0],
    [ 0, Math.PI / 6, -Math.PI / 3],
    [ 0, Math.PI / 6, -Math.PI / 1.25],
    [ Math.PI / 2, 0, 0 ],
  ]
  const indexedScaleList = [
    0.025,
  ]

  const shipPosition = tweenedSequence(indexedPositionList, { easing: cubicInOut, initialStep: 0})
  const shipRotation = tweenedSequence(indexedRotationList, { easing: cubicInOut, initialStep: 0})

  $: if ($fractionalUpdates){
    shipPosition.setStep(offset < 0 ? 0 : activeIndex + offset)
    shipRotation.setStep(offset < 0 ? 0 : activeIndex + offset)
  } else {
    shipPosition.setStep(activeIndex)
    shipRotation.setStep(activeIndex)
  }

  $: globalShipPosition.set($shipPosition) 
  $: globalShipRotation.set($shipRotation)
    

</script>

<T.Group 
  position={$shipPosition} 
  rotation.x={$shipRotation[0]} 
  rotation.y={$shipRotation[1]} 
  rotation.z={$shipRotation[2]}
  scale={indexedScaleList[0]}>
  <Roci />
</T.Group>