// задание 1-4
var findButton = document.getElementById('find-button');
var input = 'find-input';
function onButtonClick(e, input) {
  var inputBlock = document.getElementById(input);
  if (inputBlock.value === 'google') {
    window.alert('Yandex круче. Но это не точно' + '\n' + arrayOfObjects[0].name);
  } else {
    window.alert(inputBlock.value + '\n' + arrayOfObjects[0].name);
  }
}
findButton.addEventListener('click', function (e) {
  onButtonClick(e,'find-input');
});

// задание 5
var arrayOfObjects = [
  { name: 'Briws', age: 33 },
  { name: 'Kate', age: 18 },
  { name: 'Alex', age: 10 }
];

// задание 6
function superSum(num1, num2) {
  alert(Number(num1) + Number(num2));
}

// задание 7
arrayOfNumbers = [8, 100, 10, 500, 0, 1, -400, 9];
function findMinMax() {
  var minNum = arrayOfNumbers[0]; // выхватываю первые элементы массива в качестве стартовых значений min и max
  var maxNum = arrayOfNumbers[0];
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < minNum) {
      minNum = arrayOfNumbers[i];
    }
    if (arrayOfNumbers[i] > maxNum) { // сравниваю со всеми числами в массиве и если какое-то число больше, то переприсваиваю
      maxNum = arrayOfNumbers[i];
    }
  }
  alert(
    'Самое маленькое число в массиве: ' + minNum + '\n' +
    'Самое большое число в массиве: ' + maxNum
  );
}

// Задание 8
let a = 'XXX';
let b = 'YYY';
function changeAandB() {
  let temp = a;
  a = b;
  b = temp;
}

// Задание 9
function findMax(array) {
  var maxNum = array[0]; // выхватываю первый элемент массива в качестве стартового max значения
  for (i = 0; i < array.length; i++) {
    if (array[i] > maxNum) { // сравниваю со всеми числами в массиве и если какое-то число больше, то переприсваиваю
      maxNum = array[i];
    }
  }
  alert(
    'Самое большое число в массиве: ' + maxNum
  );
}

//Задание 10
var findButtonDelay = document.getElementById('find-button-delay');
var findInputDelay = document.getElementById('find-input-delay');
function onButtonClickWrapper() {
  onButtonClick('e', 'find-input-delay');
}
findButtonDelay.addEventListener('click',
  function (e) {
    setTimeout(onButtonClickWrapper, 3000)
  });
  
