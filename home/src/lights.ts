import { scene } from './scene';
import { AmbientLight, DirectionalLight } from "three";

const ambientLight = new AmbientLight('white', 0.5);
scene.add(ambientLight);

const directionalLight = new DirectionalLight('white', 0.5);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);