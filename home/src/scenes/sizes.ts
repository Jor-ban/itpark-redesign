import { ScreenBreakpoint } from "../types/ScreenBreackpoints.enum"

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

export function getOptimalBreakpoint(): number {
  for(let breakpoint of Object.values(ScreenBreakpoint)) {
    if(sizes.width > breakpoint) {
      return Number(breakpoint)
    }
  }
}