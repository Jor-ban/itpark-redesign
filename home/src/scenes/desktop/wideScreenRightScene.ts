import { planets } from './fullScreenScene';
import { interactiveEls } from './interactiveElements';
import gsap from 'gsap';
import { InteractiveObject } from '../../types/InteractiveObject';
import { loadStandardScene, setParkObservable } from './placePlanetsDesktop';

const duration = 0.5;
export let leftSquare :InteractiveObject = null

export function initRightSide() {
  leftSquare = new InteractiveObject('leftSquare', 'left-square')
  leftSquare.htmlElement.style.display = 'none'

  interactiveEls.infrastructure.addMouseEnterEvent(switchToRightView)
  interactiveEls.techvibe.addMouseEnterEvent(switchToRightView)
  interactiveEls.startup.addMouseEnterEvent(switchToRightView)
}

function switchToRightView() {
  leftSquare.htmlElement.style.display = 'block'
  gsap.to(planets.park.position, {x: -4, duration});
  gsap.to(planets.education.position, {x: -6, duration});
  gsap.to(planets.market.position, {x: -7, duration});
  gsap.to(planets.residents.position, {x: -6, duration});
  setParkObservable(1)
  leftSquare.addMouseEnterEvent(() => {
    loadStandardScene()
    leftSquare.htmlElement.style.display = 'none'
    leftSquare.emptyMouseEnterEvents()
  })
}