import { stats } from './utils/debugger';
import { renderer } from './renderer'
import { scene } from './scenes/scene'
import { camera } from './camera'

export const tick = () => { 

  stats?.begin()
  
  // Render
  renderer.render(scene, camera)
  
  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
  
  stats?.end()
}