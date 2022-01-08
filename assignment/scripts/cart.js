console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = ['bannana', 'carrot']

function addItem(item) {
  basket.push(item);
  return true;
}

function listItems() {
  for (let i = 0; i < basket.length; i++) {
    if (basket.length > 0) {
     console.log(basket[i]);
    }
    else {
      console.log('The basket is empty');
    }
  }
}

function empty() {
  basket.length = 0;
  return true;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log(listItems());
