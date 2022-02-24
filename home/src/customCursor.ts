import { MouseMoveObservable } from './mouseMove';
import gsap from 'gsap';

const cursor = document.getElementById('cursor') as HTMLElement;
new MouseMoveObservable({
  next: ($event: MouseEvent) => {
    const x = $event.clientX
    const y = $event.clientY
    gsap.to(cursor, {
      left: x, 
      top: y,
      duration: 0.2
    })
  },
  error: null,
  complete: null,
})