export class InteractiveObject {
  public htmlElement: HTMLDivElement
  public name: string
  private onmouseenter: (() => void)[] = []
  private onmouseleave: (() => void)[] = []
  private onclick: (() => void)[] = []

  constructor(name: string, ...classList: string[]) {
    this.name = name
    this.htmlElement = document.createElement('div')
    this.htmlElement.classList.add('interactive')
    for(let className of classList) {
      this.htmlElement.classList.add(className)
    }
    this.htmlElement.id = name
    document.getElementById('interactive-container').appendChild(this.htmlElement)
    this.htmlElement.addEventListener('mouseenter', () => {
      this.onmouseenter.forEach(event => event())
    })
    this.htmlElement.addEventListener('mouseleave', () => {
      this.onmouseleave.forEach(event => event())
    })
    this.htmlElement.addEventListener('click', () => {
      this.onclick.forEach(event => event())
    })
  }
  addMouseEnterEvent(mouseEnter: () => void) {
    this.onmouseenter.push(mouseEnter)
  }
  addMouseLeaveEvent(mouseLeave: () => void) {
    this.onmouseleave.push(mouseLeave)
  }
  emptyMouseEnterEvents(): void {
    this.onmouseenter = []
  }
  emptyMouseLeaveEvents(): void {
    this.onmouseleave = []
  }
  click($event: () => void) {
    this.onclick.push($event)
  }
}