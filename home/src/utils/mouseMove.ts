import { fromEvent, Observable, Observer, Subscription } from "rxjs";
export const mouseMove: Observable<Event> = fromEvent(document, "mousemove")


export class MouseMoveObservable {
  private mouseMoveSub: Subscription | null = null
  constructor(private mouseObserver: ($event: MouseEvent) => void) {
    this.subscribe()
  }
  private subscribe() {
    this.mouseMoveSub = mouseMove.subscribe(this.mouseObserver)
  }
  unsubscribe() {
    this.mouseMoveSub?.unsubscribe()
  }
}