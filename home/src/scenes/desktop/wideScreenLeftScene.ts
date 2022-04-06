import { planets } from './fullScreenScene';
import { interactiveEls } from './interactiveElements';
import gsap from 'gsap';
import { InteractiveObject } from '../../types/InteractiveObject';
import { loadStandardScene, setParkObservable } from './placePlanetsDesktop';

const duration = 0.5;
export let rightSquare :InteractiveObject = null

export function initLeftSide() {
  rightSquare = new InteractiveObject('rightSquare', 'right-square')
  rightSquare.htmlElement.style.display = 'none'

  interactiveEls.education.addMouseEnterEvent(switchToLeftView)
  interactiveEls.market.addMouseEnterEvent(switchToLeftView)
  interactiveEls.residents.addMouseEnterEvent(switchToLeftView)
}

function switchToLeftView() {
  rightSquare.htmlElement.style.display = 'block'
  gsap.to(planets.park.position, {x: 4, duration});
  gsap.to(planets.infrastructure.position, {x: 6, duration});
  gsap.to(planets.techvibe.position, {x: 7, duration});
  gsap.to(planets.startup.position, {x: 6, duration});
  setParkObservable(-1)
  rightSquare.addMouseEnterEvent(() => {
    loadStandardScene()
    rightSquare.htmlElement.style.display = 'none'
    rightSquare.emptyMouseEnterEvents()
  })
}