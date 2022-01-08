console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = []

function addItem(item) {
  basket.push(item);
  return true;
}

function listItems() {
  if (basket.length >= 1) {
    console.log(basket);
  }
  else {
    console.log('The basket is empty');
  }
}

function empty() {
  basket.lenght = 0;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
