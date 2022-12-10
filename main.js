//////////NOT LOADING////////////////
const load2 = document.querySelector(".load2")
const color = document.querySelector(".color")
const color2 = document.querySelector(".color2")
const select = document.querySelector(".select")

const colorBg = document.querySelector(".colorBg")
const color2Bg = document.querySelector(".color2Bg")
const selectBg = document.querySelector(".selectBg")

let x = 19
let y = 2584
let h = 20
let e = 4181
let c = 21
let v = 6765
let b = 22 
let k = 10946

color2Bg.onkeyup = function (){
  color2.value=color2Bg.value
if (color2Bg.value==x ) {
  color2.value=y
}else if (color2Bg.value==h) {
  color2.value=e
}else if (color2Bg.value==c) {
  color2.value=v
}else if (color2Bg.value==b) {
  color2.value=k
}
else{
  color2.value=''
}
}




function changeColor() {
  load2.style.borderTopColor = color.value
  select.style.borderColor = color.value
}
color.oninput = changeColor

function changeColor2() {
  load2.style.borderTopColor = color2.value
  color2.style.borderColor = color2.value
  color2.style.color = color2.value
}
color2.oninput = changeColor2




function bg() {
  load2.style.borderColor = colorBg.value
  selectBg.style.borderColor = colorBg.value
}
colorBg.oninput = bg

function bg2() {
  load2.style.borderColor = color2Bg.value
  color2Bg.style.borderColor = color2Bg.value
  color2Bg.style.color = color2Bg.value
}
color2Bg.oninput = bg2
