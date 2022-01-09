console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = ['bannana', 'carrot', 'lemon', 'beef', ]
const maxItems = 5;

function addItem(item) {
  if (basket.length < maxItems) {
    basket.push(item);
    return true;
  }
  else if (basket.length >= maxItems) {
    return false;
  }
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

//Could not figure out how to combine isFull with addItem.

function isFull() {
  if (basket.length < maxItems) {
    return false;
  }
  else if (basket.length >= maxItems){
    return true;
  }
}

//Not sure why this isn't working.

function removeItem(item) {
  const index = basket.indexOf(item);
  if (index > -1) {
    basket.splice[index];
    return 'Item removed';
  }
  else {
  return 'The item you requested to be removed was not found.';
  }
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log( removeItem('apples'));
console.log(`Basket is now`), listItems();
console.log('The basket is full', isFull());
console.log('The basket has been emptied', empty(), basket);
