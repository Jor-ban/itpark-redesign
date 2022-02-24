import { renderer } from './renderer'
import { scene } from './scene'
import { camera } from './camera'

export const tick = () => { 

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}