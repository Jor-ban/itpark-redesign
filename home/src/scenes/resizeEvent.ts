import { sceneState } from './sceneState';
import { camera } from "./camera"
import { renderer } from "../renderer"
import { generateContent } from "./scenesGenerator"
import { getOptimalBreakpoint, sizes } from "./sizes"

window.addEventListener('resize', () =>
{
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  sceneState.sceneBreakpoint = getOptimalBreakpoint()
  generateContent()
})