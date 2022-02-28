import { fromEvent, Observable, Observer, Subscription } from "rxjs";
import { camera } from "../camera";
import { stats } from "./debugger";
import { renderer } from "../renderer";
import { scene } from "../scenes/scene";

export const mouseMove: Observable<Event> = fromEvent(document, "mousemove")


export class MouseMoveObservable {
  private mouseMoveSub: Subscription | null = null
  constructor(private mouseObserver: Observer<MouseEvent>) {
    this.subscribe()
  }
  private subscribe() {
    this.mouseMoveSub = mouseMove.subscribe(this.mouseObserver)
    stats?.begin()
    stats?.end()
    // Render
    renderer.render(scene, camera)
  }
  unsubscribe() {
    this.mouseMoveSub?.unsubscribe()
  }
}