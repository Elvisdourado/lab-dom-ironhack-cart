// ITERATION 1
let title = document.getElementById("title")



title.addEventListener("mouseover", fadeOutEffect)
document.getElementById("title").addEventListener('click', fadeOutEffect)
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = quantity.value * (price.innerText);
    return subTotal;
}

function calculateAll() {
  
  // end of test

  // ITERATION 2
  console.log(totalSub)

  document.querySelector('#total-value span').innerHTML = totalSub;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
