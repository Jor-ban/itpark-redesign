import { Group } from "three"
import { loadPlanets } from '../../utils/loadingManager'
import { PlanetsObj } from "../../types/PlanetsObj.interface"

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
}