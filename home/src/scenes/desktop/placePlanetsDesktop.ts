import { ScreenBreakpoint } from '../../types/ScreenBreackpoints.enum';
import { sceneState } from '../sceneState';
import { sizes } from './../sizes';
import { planets } from "./fullScreenScene"

export function placePlanets() {
  planets.education.rotation      .set(0.2, 0.3, 0)
  planets.market.rotation         .set(-0.163, 0.09, 0.146)
  planets.residents.rotation      .set(-0.163, 0.3, 0)
  planets.infrastructure.rotation .set(0.249, -0.318, 0)
  
  if(sizes.width > ScreenBreakpoint.XL) {
    planets.market.scale            .set(1.4, 1.4, 1.4)
    planets.residents.scale         .set(1.2, 1.2, 1.2)
    planets.infrastructure.scale    .set(0.9, 0.9, 0.9)
    
    planets.education.position      .set(-2.5, 2.5, -1)
    planets.market.position         .set(-4, 0, -1)
    planets.park.position           .set(0, 0, 2)
    planets.residents.position      .set(-2.5, -2.5, -1)
    planets.infrastructure.position .set(2.5, 2.5, -1)
    planets.techvibe.position       .set(4, 0, -1)
    planets.startup.position        .set(2.5, -2.5, -1)

    sceneState.sceneBreakpoint = ScreenBreakpoint.XL

  } else if(sizes.width > ScreenBreakpoint.L) {
    sceneState.sceneBreakpoint = ScreenBreakpoint.L
  }
}
