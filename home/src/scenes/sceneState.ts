import { getOptimalBreakpoint } from "./sizes";

export enum CurrentScene {
  'main',
  'wideScreenLeft' ,
  'wideScreenRight',
  'mobileMain',
}

export const sceneState = {
  loaded: false,
  planetsLoaded: false,
  currentScene: CurrentScene.main,
  sceneBreakpoint: getOptimalBreakpoint(),
}