// scene
import { Scene, sRGBEncoding } from 'three'
import { CubeTextureLoader } from "three";

export const scene = new Scene()

export const cubeTextureLoader = new CubeTextureLoader()
export const environmentMap = cubeTextureLoader.load([
  '/environmentMap/ny.jpg', // negY
  '/environmentMap/py.jpg', // posY
  '/environmentMap/default.jpg', // negX
  '/environmentMap/default.jpg', // posZ
  '/environmentMap/default.jpg', // negZ
  '/environmentMap/px.jpg', // posX
])
environmentMap.encoding = sRGBEncoding
scene.background = environmentMap
scene.environment = environmentMap