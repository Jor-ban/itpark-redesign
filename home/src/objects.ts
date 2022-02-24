import { sizes } from './sizes';
import { Group } from "three";
import { loadPlanets } from './loadingManager';
import { MouseMoveObservable } from "./mouseMove";
import { PlanetsObj } from "./types/PlanetsObj.interface";
import gsap from 'gsap'

export const planets: PlanetsObj = {
  education: null,
  market: null,
  park: null,
  infrastructure: null,
  residents: null,
  startup: null,
  techvibe: null
};
export let mouseMoveObservable: MouseMoveObservable | null

(async function() {

  const gltfPlanets: Group[] = await loadPlanets(
    '/planets/education.gltf',
    '/planets/it-market.gltf',
    '/planets/park.glb',
  );
  planets.education = gltfPlanets[0];
  planets.market    = gltfPlanets[1];
  planets.park      = gltfPlanets[2];
  // default positions
  planets.education.position.set(0, -0.3, 0);
  planets.market.position   .set(1, -0.3, 0);
  planets.park.position     .set(0, 0.3, 1.5);
  // start mousemove observing
  mouseMoveObservable = new MouseMoveObservable({
    next: (event: MouseEvent) => {
      const mouseX = event.clientX / sizes.width * 2 - 1;
      const mouseY = -(event.clientY / sizes.height) * 2 + 1;
      gsap.to(planets.park.rotation, {duration: 1, x: - mouseY * 0.2, delay: 0})
      gsap.to(planets.park.rotation, {duration: 1, y: mouseX * 0.6, delay: 0})
    },
    error: null,
    complete: null,
  });
})();