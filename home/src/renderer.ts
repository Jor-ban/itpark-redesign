import { sizes } from "./sizes"
import { NoToneMapping, PCFSoftShadowMap, sRGBEncoding, WebGLRenderer } from "three"

export const canvas = document.getElementById('canvas') as HTMLCanvasElement
export const renderer = new WebGLRenderer({
  canvas, 
  antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.physicallyCorrectLights = true
renderer.outputEncoding = sRGBEncoding
renderer.toneMapping = NoToneMapping
renderer.toneMappingExposure = 3
renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))