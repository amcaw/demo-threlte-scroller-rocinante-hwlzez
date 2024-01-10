<script>
import {
  useThrelte
} from '@threlte/core';
import {
  ACESFilmicToneMapping, 
  NoToneMapping, 
  LinearToneMapping, 
  ReinhardToneMapping, 
  CineonToneMapping, 
  CustomToneMapping,
  sRGBEncoding
} from 'three';

const { renderer } = useThrelte();
renderer.outputEncoding = sRGBEncoding;

// TONE MAPPING OPTIONS
// renderer.toneMapping = NoToneMapping;
// renderer.toneMapping = ACESFilmicToneMapping;
// renderer.toneMapping = LinearToneMapping;
// renderer.toneMapping = ReinhardToneMapping;
renderer.toneMapping = CineonToneMapping;
</script>
