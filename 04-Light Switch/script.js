const room = document.getElementById("room");
const switchButton = document.getElementById("switchButton");
const message = document.getElementById("message");
const status = document.getElementById("status");

switchButton.addEventListener("click", function () {
    room.classList.toggle("dark");
    if (room.classList.contains("dark")) {
        message.textContent = "Time to rest!";
        status.textContent = "The light is OFF";
    } else {
        message.textContent = "Shine bright!";
        status.textContent = "The light is ON";
    }
});
