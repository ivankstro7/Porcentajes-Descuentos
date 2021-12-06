// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}
  
// Madone

function discontBtn() {

  // inputs
  const inputValue = document.getElementById("inputValueMadone").value;  
  const inputDiscount = document.getElementById("discountListMadone").value;
  
  // inputs list
  const blackFriday = document.getElementById("blackFriday");
  const ciberMonday = document.getElementById("ciberMonday");
  const Christmas = document.getElementById("Christmas");

  let discount = 0

  if (inputDiscount == blackFriday.value) {
    discount = blackFriday.value
  } else if (inputDiscount == ciberMonday.value) {
    discount = ciberMonday.value
  } else if (inputDiscount == Christmas.value){
    discount = Christmas.value
  } else {
    discount = 0
  }

  // calculo - operación
  const precioConDescuento = calcularPrecioConDescuento(inputValue, discount);

  // mostrar precio con descuento
  const result = document.getElementById("result");
  result.style.color = "#fff";
  result.innerText = "$ " + precioConDescuento;

  // mostrar valor del cupon
  const cupon = document.getElementById("coupon");
  cupon.style.color = "#fff";
  cupon.innerText = discount + "%";
}

function eraseInputsMadone(){
  document.getElementById("inputValueMadone").value = "";
  document.getElementById("discountListMadone").value = "";

  const result = document.getElementById("result");
  result.style.color = "#000";

  const cupon = document.getElementById("coupon");
  cupon.style.color = "#000";

}

// Emonda

function discontBtnEmonda() {
  const inputValue = document.getElementById("inputValueEmonda");
  const priceValue = inputValue.value;
  
  const inputDiscount = document.getElementById("inputDiscontEmonda");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const result = document.getElementById("resultEmonda");
  result.style.color = "#fff";

  result.innerText = "$ " + precioConDescuento;
}

function eraseInputsEmonda() {
  document.getElementById("inputValueEmonda").value = "";
  document.getElementById("inputDiscontEmonda").value = "";

  const result = document.getElementById("resultEmonda");
  result.style.color = "#000";
}

// Domane

function discontBtnDomane() {
  const inputValue = document.getElementById("inputValueDomane");
  const priceValue = inputValue.value;
  
  const inputDiscount = document.getElementById("inputDiscontDomane");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const result = document.getElementById("resultDomane");
  result.style.color = "#fff";

  result.innerText = "$ " + precioConDescuento;
}

function eraseInputsDomane() {
  document.getElementById("inputValueDomane").value = "";
  document.getElementById("inputDiscontDomane").value = "";

  const result = document.getElementById("resultDomane");
  result.style.color = "#000";
}

// Checkpoint

function priceDiscountCheckpoint() {
  const inputValue = document.getElementById("inputValueCheckpoint");
  const priceValue = inputValue.value;
  
  const inputDiscount = document.getElementById("inputDiscontCheckpoint");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const result = document.getElementById("resultCheckpoint");
  result.style.color = "#fff";

  result.innerText = "$ " + precioConDescuento;
}

function eraseInputsCheckpoint() {
  document.getElementById("inputValueCheckpoint").value = "";
  document.getElementById("inputDiscontCheckpoint").value = "";

  const result = document.getElementById("resultCheckpoint");
  result.style.color = "#000";
}

  
  
// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });