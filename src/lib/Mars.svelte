<script>
  import {
    T,
    useFrame,
    useTexture,
    useThrelte,
  } from '@threlte/core';
  const { camera } = useThrelte();

  const marsColor = "https://alexwarnes.github.io/assets/textures/mars/color_2k.jpeg"
  // const marsTopo = "https://alexwarnes.github.io/assets/textures/mars/topo_1k.jpeg"
  // const marsColor = "https://raw.githubusercontent.com/AlexWarnes/three-sc-sandbox/main/static/sc_textures/mars_1k_color.jpg"
  // const marsTopo = "https://raw.githubusercontent.com/AlexWarnes/three-sc-sandbox/main/static/sc_textures/mars_1k_topo.jpg"

  const map = useTexture(marsColor)
  let r = 0;
  useFrame((_, delta) => {
    r -= 0.008 * delta;
  })
</script>

<T.Mesh rotation.y={r} position={[200 * $camera.aspect, 100, -400]}>
  <T.SphereGeometry args={[50, 64, 64]}/>
  <T.MeshStandardMaterial {map} bumpScale={4} metalness={0.95} roughness={0.85} />
</T.Mesh>
