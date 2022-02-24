import { sizes } from "./sizes";
import { PerspectiveCamera } from "three";

export const camera = new PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 7