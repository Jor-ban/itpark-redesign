import { Group, Object3D, Vector3 } from "three"
import gsap from 'gsap'
import { cursor, cursorInner } from "../scenes/desktop/customCursor"
import { InteractiveObject } from "../types/InteractiveObject"


export function bindInteractiveElementToObject(interactiveObject: InteractiveObject, object: Group | Object3D, scale: boolean = true): Vector3 {
  let initialScale: Vector3 = null
  interactiveObject.addMouseEnterEvent(
    (): void => {
      initialScale = object.scale.clone()
      if(scale) {
        gsap.to(object.scale, {
          x: object.scale.x * 1.2,
          y: object.scale.y * 1.2,
          z: object.scale.z * 1.2,
          duration: 0.5
        })
      }
      cursor.style.opacity = '0'
      cursorInner.style.cssText = 'width: 30px; height: 30px; background: white'
    }
  )
  interactiveObject.addMouseLeaveEvent(
    (): void => {
      if(scale) {
        gsap.to(object.scale, {
          x: initialScale.x,
          y: initialScale.y,
          z: initialScale.z,
          duration: 0.5
        })
      }
      cursor.style.opacity = '1'
      cursorInner.style.cssText = 'width: 15px; height: 15px; border-color: transparent; background: #7dba28'
    })
  return initialScale
}