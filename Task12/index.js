const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;

  const user = {
    name: name,
    age: age,
    timestamp: new Date().toLocaleString(),
  };

  const { name: userName, age: userAge, timestamp } = user;

  alert(
    "Your name is: " +
      name +
      "\nYour age is: " +
      age +
      "\nTimestamp: " +
      timestamp
  );
});
