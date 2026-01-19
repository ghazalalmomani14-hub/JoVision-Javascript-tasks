const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;

  fetch("https://api.agify.io?name=" + name)
    .then((response) => response.json())
    .then((data) => {
      const { name, age } = data;

      alert("Your name is: " + name + "\nYour age is: " + age);
    })
    .catch((error) => {
      alert("Error: " + error);
    });
});
