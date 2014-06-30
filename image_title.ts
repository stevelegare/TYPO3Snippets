#Create image with page title 

TEMP = IMAGE
TEMP.file = GIFBUILDER
TEMP.file {
  XY = 450,25
  5 = IMAGE
  5.file = fileadmin/image/bg_titre.gif
  10 = TEXT
  10 {
    text.data = page:subtitle // page:title
    offset = 9,18
    fontColor = #a70b02
    fontFile = fileadmin/fonts/arial.ttf
    fontSize = 18
  }
}

lib.page_title < TEMP
