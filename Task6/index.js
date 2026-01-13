function numArray() {
  const num = [];
  for (let i = 0; i <= 100; i++) {
    num.push(i);
  }
  return num;
}

function funButton1(arr) {
  const numbers = arr.filter((n) => n % 3 !== 0);
  console.log(numbers);
  return;
}
function handleButtonClick() {
  const arr = numArray();
  funButton1(arr);
}
function attachButtonEvent() {
  const button = document.getElementById("clickBtn1");

  if (!button) {
    console.error("Button not found");
    return;
  }

  button.addEventListener("click", handleButtonClick);
}
attachButtonEvent();

function funButton2(arr) {
  for (let i = 101; i <= 150; i++) {
    arr.push(i);
  }
  console.log(arr);
}
function handleButtonClick2() {
  const arr = numArray();
  funButton2(arr);
}
function attachButtonEvent2() {
  const button = document.getElementById("clickBtn2");

  if (!button) {
    console.error("Button not found");
    return;
  }

  button.addEventListener("click", handleButtonClick2);
}
attachButtonEvent2();

function funButton3(arr) {
  const result = arr.map((n) => n + 3);
  console.log(result);
}
function handleButtonClick3() {
  const arr = numArray();
  funButton3(arr);
}

function attachButtonEvent3() {
  const button = document.getElementById("clickBtn3");

  if (!button) {
    console.error("Button not found");
    return;
  }

  button.addEventListener("click", handleButtonClick3);
}
attachButtonEvent3();

function funButton4(arr) {
  for (let i = 20; i <= 40; i++) {
    console.log(arr[i]);
  }
}

function handleButtonClick4() {
  const arr = numArray();
  funButton4(arr);
}

function attachButtonEvent4() {
  const button = document.getElementById("clickBtn4");

  if (!button) {
    console.error("Button not found");
    return;
  }

  button.addEventListener("click", handleButtonClick4);
}
attachButtonEvent4();

function funButton5(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  console.log("shuffled array", array);
  array.sort((a, b) => b - a);
  console.log("sorts it in descending order", array);
}

function handleButtonClick5() {
  const array = numArray();
  funButton5(array);
}

function attachButtonEvent5() {
  const button = document.getElementById("clickBtn5");

  if (!button) {
    console.error("Button not found");
    return;
  }

  button.addEventListener("click", handleButtonClick5);
}
attachButtonEvent5();
