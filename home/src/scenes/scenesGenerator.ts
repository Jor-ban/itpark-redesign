import { loadFullScreen } from "./desktop/fullScreenScene";
import { sizes } from "./sizes";
import { sceneState } from "./sceneState";
import { placePlanets } from "./desktop/placePlanetsDesktop";
import { ScreenBreakpoint } from "../types/ScreenBreackpoints.enum";

import './resizeEvent'

let breakpoint = 0  

export async function generateContent() {
  if(sizes.width >= ScreenBreakpoint.L) {
    // for big screens
    if(!sceneState.planetsLoaded) {
      await loadFullScreen()
      sceneState.planetsLoaded = true
    }
    if(breakpoint != sceneState.sceneBreakpoint) {
      console.log('resetting positions')
      placePlanets()
      sceneState.loaded = true
      breakpoint = sceneState.sceneBreakpoint
    }
  } else {
    // for mobile devices
    
  }
}