import { MouseMoveObservable } from '../../utils/mouseMove';
import gsap from 'gsap';

export const cursor = document.getElementById('cursor') as HTMLElement;
export const cursorInner = document.getElementById('cursor-inner')
new MouseMoveObservable(($event: MouseEvent) => {
  const x = $event.clientX
  const y = $event.clientY
  gsap.to(cursor, {
    left: x, 
    top: y,
    duration: 0.35
  })
  cursorInner.style.top = y + 'px'
  cursorInner.style.left = x + 'px'
})