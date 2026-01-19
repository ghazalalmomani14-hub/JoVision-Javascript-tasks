const button = document.getElementById("getIpBtn");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.ipify.org");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const ip = await response.text();
    button.textContent = ip;
  } catch (error) {
    alert("Error: " + error.message);
  }
});
