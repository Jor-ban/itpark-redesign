import gsap from 'gsap'
import { Group, LoadingManager, Mesh, MeshStandardMaterial } from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { debugParams } from './debugger'
import { scene } from './scene'

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

/**
 * loads planets with gltf loader from array of gltf file urls
 * @param planetsUrl
 * @returns loadedPlanets
 */
export async function loadPlanets(...planetsUrl: string[]): Promise<Group[]> {
  let   planetsNotLoadedYet   = planetsUrl.length
  const loadingProgress       = 0       //TODO add progress bar
  const loadedPlanets: Group[] = []
  const loadingManager        = new LoadingManager()

  loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
  }
  const gltfLoader = new GLTFLoader(loadingManager)
  gltfLoader.setDRACOLoader(dracoLoader)
  for(let planet of planetsUrl) {
    const gltf = await gltfLoader.loadAsync(planet)
    const group = new Group()
    gltf.scenes.forEach(scene => {
      group.add(scene)
    })
    loadedPlanets.push(group)
    scene.add(group)
    planetsNotLoadedYet--
    if (planetsNotLoadedYet === 0) {
      break
    }
  }
  updateAllMaterials()
  return loadedPlanets
}

export const updateAllMaterials = () => {
  scene.traverse((child) =>
  {
    if(child instanceof Mesh && child.material instanceof MeshStandardMaterial)
    {
      child.material.envMapIntensity = debugParams.envMapIntensity
      child.material.needsUpdate = true
    }
  })
}