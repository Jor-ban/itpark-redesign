import { Camera, Object3D } from "three";
import gsap from 'gsap';

export function focusOn(camera: Camera, object: Object3D, duration: number = 0.5) {
  const delayX = camera.position.x - object.position.x
  const delayY = camera.position.y - object.position.y
  const delayZ = camera.position.z - object.position.z

  gsap.to(camera.rotation, {
    x: - Math.atan(delayY / delayZ),
    y: Math.atan(delayX / delayZ),
    duration
  })
}