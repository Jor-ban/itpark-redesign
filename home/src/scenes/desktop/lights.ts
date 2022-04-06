import { AmbientLight, DirectionalLight, PointLight } from "three";
import gsap from "gsap";
import { scene } from '../scene';
import { MouseMoveObservable } from '../../utils/mouseMove';
import { sizes } from "../sizes";

export const ambientLight = new AmbientLight('white', 0.5);
scene.add(ambientLight);

export const directionalLight = new DirectionalLight('white', 0.5);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);

export const pointLight = new PointLight('white', 0.5, 7, 2)
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

// const pointLightHelper = new PointLightHelper(pointLight, 2);
// scene.add(pointLightHelper);

export const pointLightEvent = new MouseMoveObservable(($event: MouseEvent) => {
  const mouseX = $event.clientX / sizes.width * 12 - 6
  const mouseY = -($event.clientY / sizes.height) * 7 + 3.5 
  gsap.to(pointLight.position, {
    x: mouseX,
    y: mouseY,
    duration: 0.5,
  })
})