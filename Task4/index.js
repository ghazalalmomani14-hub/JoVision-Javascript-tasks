function numArray() {
  const num = [];
  for (let i = 0; i <= 100; i++) {
    num.push(i);
  }
  return num;
}

function calcSum(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

function handleButtonClick() {
  const numbersArray = numArray();
  const sum = calcSum(numbersArray);
  console.log("Sum from 0 to 100 is:", sum);
}
function attachButtonEvent() {
  const button = document.getElementById("clickBtn");

  if (!button) {
    console.error("Button not found");
    return;
  }

  button.addEventListener("click", handleButtonClick);
}

attachButtonEvent();
