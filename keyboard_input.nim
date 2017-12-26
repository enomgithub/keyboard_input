import dom
from strutils import intToStr, parseInt


proc incWidth(element: Element) =
  let
    width = element.style.width.parseInt
    maxWidth = window.innerWidth - document.body.style.margin.parseInt * 2
  if width >= maxWidth: discard
  else: element.style.width = (width + 1).intToStr & "px"


proc decWidth(element: Element) =
  let width = element.style.width.parseInt
  if width <= 1: discard
  else: element.style.width = (width - 1).intToStr & "px"


proc toggleKey(keyCode: int, element: Element) =
  const
    jKey: int8 = int8('J')  # = 74'i8
    kKey: int8 = int8('K')  # = 75'i8
  case keyCode
  of jKey: decWidth(element)
  of kKey: incWidth(element)
  else: discard


proc main() =
  const
    ID = "bar"
    HEIGHT = 10
    WIDTH = 100
    COLOR = "#302833"
  let bar = document.getElementById(ID)
  bar.style.backgroundColor = COLOR
  bar.style.height = HEIGHT.intToStr & "px"
  bar.style.width = WIDTH.intToStr & "px"
  document.body.style.margin = "8px"
  window.addEventListener( "keydown"
                         , proc(e: Event) = toggleKey(e.keyCode, bar)
                         , false
                         )


when isMainModule:
  main()
