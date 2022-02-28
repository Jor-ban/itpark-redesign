import { sizes } from '../sizes'
import { Group } from "three"
import { loadPlanets } from '../../utils/loadingManager'
import { MouseMoveObservable } from "../../utils/mouseMove"
import { PlanetsObj } from "../../types/PlanetsObj.interface"
import gsap from 'gsap'

import './customCursor'
import './lights'

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

export async function loadFullScreen() {
  const gltfPlanets: Group[] = await loadPlanets(
    '/planets/education.gltf',
    '/planets/it-market.gltf',
    '/planets/park.glb',
    '/planets/residents.gltf',
    '/planets/infrastructure.gltf',
    '/planets/techvibe.gltf',
    '/planets/startup.gltf',
  );
  planets.education = gltfPlanets[0]
  planets.education.name = 'Education'
  planets.market    = gltfPlanets[1]
  planets.market.name = 'IT Market'
  planets.park      = gltfPlanets[2]
  planets.park.name = 'IT Park'
  planets.residents = gltfPlanets[3]
  planets.residents.name = 'Residents'
  planets.infrastructure = gltfPlanets[4]
  planets.infrastructure.name = 'Infrastructure'
  planets.techvibe = gltfPlanets[5]
  planets.techvibe.name = 'TechVibe'
  planets.startup = gltfPlanets[6]
  planets.startup.name = 'Startup'
  
  // start mousemove observing
  mouseMoveObservable = new MouseMoveObservable({
    next: (event: MouseEvent) => {
      const mouseX = event.clientX / sizes.width * 2 - 1
      const mouseY = -(event.clientY / sizes.height) * 2 + 1
      gsap.to(planets.park.rotation, {duration: 1, x: - mouseY * 0.2, delay: 0})
      gsap.to(planets.park.rotation, {duration: 1, y: mouseX * 0.6, delay: 0})
    },
    error: null,
    complete: null,
  });
}