const button = document.getElementById("getIpBtn");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.ipify.org/");
    const ip = await response.text();
    console.log("Your IP is:", ip);
  } catch (error) {
    console.log("Error:", error);
  }
});
