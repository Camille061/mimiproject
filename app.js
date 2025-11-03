
let Name = document.getElementById("Name")
let package = document.getElementById("package")
let speed = document.getElementById("speed")
let btn = document.getElementById("callout")

// btn.onclick = () => {
//     //  window.location.href = 'tel:*900*3719*17331647#'
// }

let btn1day = document.getElementById("btn-1day")
let btn2day = document.getElementById("btn-2day")
let btn3day = document.getElementById("btn-3day")
let btn7day = document.getElementById("btn-7day")
let btn30day = document.getElementById("btn-30day")

let oneday = document.getElementById("oneday")
let twoday = document.getElementById("twoday")
let threeday = document.getElementById("threeday")
let sevenday = document.getElementById("sevenday")
let thirtyday = document.getElementById("thirty")

btn1day.onclick = () => {
  oneday.hidden = false
  twoday.hidden = true
  threeday.hidden = true
  sevenday.hidden = true
  thirtyday.hidden = true
}

btn2day.onclick = () => {
  oneday.hidden = true
  twoday.hidden = false
  threeday.hidden = true
  sevenday.hidden = true
  thirtyday.hidden = true
}

btn3day.onclick = () => {
  oneday.hidden = true
  twoday.hidden = true
  threeday.hidden = false
  sevenday.hidden = true
  thirtyday.hidden = true
}

btn7day.onclick = () => {
  oneday.hidden = true
  twoday.hidden = true
  threeday.hidden = true
  sevenday.hidden = false
   thirtyday.hidden = true
}

btn30day.onclick = () => {
  oneday.hidden = true
  twoday.hidden = true
  threeday.hidden = true
  sevenday.hidden = true
  thirtyday.hidden = false
}

