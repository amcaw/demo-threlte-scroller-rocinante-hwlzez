<script>
  import { T, OrbitControls, useFrame } from '@threlte/core';
  import {
    Text,
    Float,
    Grid
  } from '@threlte/extras';
  import { float, } from '$lib/settings';
  import ShipWrapper from '$lib/ShipWrapper.svelte';
  import Mars from '$lib/Mars.svelte';
  import StarField from '$lib/StarField.svelte';
  import Effects from '$lib/Effects.svelte';
  export let index
  export let offset
  export let progress

  let starRotation = 0;
</script>

<Float
  rotationIntensity={$float ? 8 : 0}
  floatIntensity={$float ? 8 : 0}
  speed={$float ? 1 : 0}
>
  <T.PerspectiveCamera makeDefault position.y={1} position.z={15} fov={55}>
    <Effects />
  </T.PerspectiveCamera>
</Float>

<T.DirectionalLight position={[10, 10, 15]} intensity={2} />
<T.AmbientLight />

<ShipWrapper activeIndex={index}  {offset} {progress}/>

<Mars />

<T.Group rotation.z={starRotation}>
  <StarField count={500}/>
</T.Group>
