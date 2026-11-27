let digits = document.querySelectorAll(".digit");
let period = document.querySelector(".period");
let dateSection = document.querySelectorAll(".date-section span");

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    period.textContent = hours >= 12 ? "PM" : "AM";

    let time = [
        String(hours % 12 || 12).padStart(2, "0"),
        String(minutes).padStart(2, "0"),
        String(seconds).padStart(2, "0")
    ];

    digits.forEach((digit, index) => {
        if (digit.textContent !== time[index]) {
            console.log(time[index])
            let card = digit.parentElement;

            card.classList.remove("flip");
            void card.offsetWidth;

            digit.textContent = time[index];
            card.classList.add("flip");
        }
    });

    dateSection[0].textContent = now.toLocaleDateString("en-US", {
        weekday: "long"
    }).toUpperCase();

    dateSection[2].textContent = now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    }).toUpperCase();
}

updateClock();
setInterval(updateClock, 1000);
