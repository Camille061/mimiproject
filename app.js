let quantity = document.getElementById("quantity")
let prince = document.getElementById("prince")
let result = document.getElementById("result")
let plus = document.getElementById("plus")



let calculate = () => {
 let q = Number(quantity.value);
  let p = Number(prince.value);
  let total = q * p
  result.value = total
}

plus.onclick = calculate

