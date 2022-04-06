import { Group, Object3D } from "three"
import gsap from "gsap"
import { canvas } from "../renderer"
import { camera } from "../scenes/camera"
import { InteractiveObject } from "../types/InteractiveObject"
import { focusOn } from "./cameraFocusSmoothly"

export async function interactionClick(interactiveElement: InteractiveObject, object: Group | Object3D) {
  interactiveElement.click(() => {
    interactiveElement.emptyMouseEnterEvents()
    interactiveElement.emptyMouseLeaveEvents()
    focusOn(camera, object, 0.2)
    gsap.to(camera, {
      fov: 120,
      duration: 2,
      delay: 0.5,
      onUpdate: () => {
        camera.updateProjectionMatrix()
      }
    })
    gsap.to(object.rotation, {
      x: object.rotation.x + 0.5,
      z: object.rotation.z + 0.5,
      y: object.rotation.y - 0.2,
      duration: 2,
      delay: 0.7,
    })
    gsap.to(camera.position, {
      x: object.position.x,
      y: object.position.y,
      z: object.position.z,
      duration: 2,
      delay: 0.7,
    })
    gsap.to(canvas, {
      opacity: 0,
      duration: 1.3,
      delay: 0.7,
    })
  })
}