import { ScreenBreakpoint } from '../../types/ScreenBreackpoints.enum';
import { sceneState } from '../sceneState';
import { sizes } from './../sizes';
import { planets } from "./fullScreenScene"
import { interactiveEls } from './interactiveElements';
import { bindInteractiveElementToObject } from '../../utils/interactiveObjectBinding';
import { interactionClick } from '../../utils/interactionClick';
import gsap from 'gsap'
import { initLeftSide } from './wideScreenLeftScene';
import { initRightSide } from './wideScreenRightScene';
import { MouseMoveObservable } from '../../utils/mouseMove';

export let mouseMoveObservable: MouseMoveObservable | null

export function placePlanets() {
  loadStandardScene()
  addInteraction()
}
const duration = 0.5

export function loadStandardScene() {
  smoothlyRotate()
  setParkObservable()
  if(sizes.width > ScreenBreakpoint.XL) {
    gsap.to(planets.education.scale,        {x: 1, y: 1, z: 1, duration})
    gsap.to(planets.market.scale,           {x:1.4, y: 1.4, z: 1.4, duration})
    gsap.to(planets.residents.scale,        {x: 1.2, y: 1.2, z: 1.2, duration})
    gsap.to(planets.infrastructure.scale,   {x: 0.9, y: 0.9, z: 0.9, duration})
    gsap.to(planets.startup.scale,          {x: 1.2, y: 1.2, z: 1.2, duration})
    gsap.to(planets.techvibe.scale,         {x: 0.9, y: 0.9, z: 0.9, duration})
    gsap.to(planets.park.scale,             {x: 2, y: 2, z: 2, duration})
    
    gsap.to(planets.education.position,     {x: -2.5, y: 2.5, z: -1, duration})
    gsap.to(planets.market.position,        {x: -4, y: 0, z: -1, duration})
    gsap.to(planets.park.position,          {x: 0, y: 0, z: -2.3, duration})
    gsap.to(planets.residents.position,     {x: -2.5, y: -2.5, z: -1, duration})
    gsap.to(planets.infrastructure.position,{x: 2.5, y: 2.5, z: -1, duration})
    gsap.to(planets.techvibe.position,      {x: 4, y: 0, z: -1, duration})
    gsap.to(planets.startup.position,       {x: 2.5, y: -2.5, z: -1, duration})

    sceneState.sceneBreakpoint = ScreenBreakpoint.XL

  } else if(sizes.width > ScreenBreakpoint.L) {
    gsap.to(planets.education.scale,        {x: 0.8, y: 0.8, z: 0.8, duration})
    gsap.to(planets.market.scale,           {x: 1, y: 1, z: 1, duration})
    gsap.to(planets.residents.scale,        {x: 0.9, y: 0.9, z: 0.9, duration})
    gsap.to(planets.infrastructure.scale,   {x: 0.7, y: 0.7, z: 0.7, duration})
    gsap.to(planets.startup.scale,          {x: 0.9, y: 0.9, z: 0.9, duration})
    gsap.to(planets.techvibe.scale,         {x: 0.7, y: 0.7, z: 0.7, duration})
    
    gsap.to(planets.education.position,     {x: -2, y: 2.5, z: -1, duration})
    gsap.to(planets.market.position,        {x: -3.4, y: 0, z: -1, duration})
    gsap.to(planets.park.position,          {x: 0, y: 0, z: 1.2, duration})
    gsap.to(planets.residents.position,     {x: -2, y: -2.5, z: -1, duration})
    gsap.to(planets.infrastructure.position,{x: 2, y: 2.5, z: -1, duration})
    gsap.to(planets.techvibe.position,      {x: 3.4, y: 0, z: -1, duration})
    gsap.to(planets.startup.position,       {x: 2, y: -2.5, z: -1, duration})

    sceneState.sceneBreakpoint = ScreenBreakpoint.L
  }
}

function smoothlyRotate() {
  gsap.to(planets.education.rotation,       { x: 0.2,     y: 0.3,     z: 0, duration,})
  gsap.to(planets.market.rotation,          { x: -0.163,  y: 0.09,    z: 0.146, duration,})
  gsap.to(planets.residents.rotation,       { x: -0.163,  y: 0.3,     z: 0, duration,})
  gsap.to(planets.infrastructure.rotation,  { x: 0.249,   y: -0.318,  z: 0, duration,})
  gsap.to(planets.techvibe.rotation,        { x: 0,       y: -0.49,   z: 0, duration,})
  gsap.to(planets.startup.rotation,         { x: -0.26,   y: -0.32,   z: -0.2, duration,})
  gsap.to(planets.park.rotation,            { x: 0,       y: 0,       z: 0, duration,})
}

export function setParkObservable(delayX = 0, delayY = 0) {
    // start mousemove observing
    mouseMoveObservable?.unsubscribe()
    mouseMoveObservable = new MouseMoveObservable((event: MouseEvent) => {
      const mouseX = event.clientX / sizes.width * 2 - 1 + delayX
      const mouseY = -(event.clientY / sizes.height) * 2 + 1 + delayY
      gsap.to(planets.park.rotation, {duration: 1, x: - mouseY * 0.2, delay: 0})
      gsap.to(planets.park.rotation, {duration: 1, y: mouseX * 0.6, delay: 0})
    });
}

function addInteraction() {
  bindInteractiveElementToObject(interactiveEls.education, planets.education)
  interactionClick(interactiveEls.education, planets.education)
  bindInteractiveElementToObject(interactiveEls.market, planets.market)
  interactionClick(interactiveEls.market, planets.market)
  bindInteractiveElementToObject(interactiveEls.residents, planets.residents)
  interactionClick(interactiveEls.residents, planets.residents)
  bindInteractiveElementToObject(interactiveEls.infrastructure, planets.infrastructure)
  interactionClick(interactiveEls.infrastructure, planets.infrastructure)
  bindInteractiveElementToObject(interactiveEls.techvibe, planets.techvibe)
  interactionClick(interactiveEls.techvibe, planets.techvibe)
  bindInteractiveElementToObject(interactiveEls.startup, planets.startup)
  interactionClick(interactiveEls.startup, planets.startup)
  bindInteractiveElementToObject(interactiveEls.park, planets.park, false)
  interactionClick(interactiveEls.park, planets.park)
  initLeftSide()
  initRightSide()
  // moving part
}

