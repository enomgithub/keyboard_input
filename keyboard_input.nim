import dom
from strutils import intToStr, parseInt


proc incWidth(element: Element) =
  let width = parseInt(element.style.width)
  if width >= window.innerWidth:
    discard
  else:
    element.style.width = intToStr(width + 1) & "px"


proc decWidth(element: Element) =
  let width = parseInt(element.style.width)
  if width <= 1:
    discard
  else:
    element.style.width = intToStr(width - 1) & "px"


proc toggleKey(keyCode: int, element: Element) =
  case keyCode
  of 74: decWidth(element)  # j key
  of 75: incWidth(element)  # k key
  else: discard


proc main() =
  const
    id = "bar"
    height = 10
    width = 100
    color = "#302833"
  let bar = document.getElementById(id)
  bar.style.backgroundColor = color
  bar.style.height = intToStr(height) & "px"
  bar.style.width = intToStr(width) & "px"
  window.addEventListener("keydown",
                          proc(e: Event) = toggleKey(e.keyCode, bar),
                          false)


when isMainModule:
  main()
