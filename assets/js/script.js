var heading = document.getElementsByTagName('h1')[0]
heading.style.color = 'blue'

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}