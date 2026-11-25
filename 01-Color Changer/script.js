const colorBtn = document.getElementById("colorBtn");

const colors = [
    "#D6BAFF",
    "#ffdde4",
    "#d8fdf0",
    "#cfe7ff",
    "rgb(255, 239, 200)",
    "#ffe7d6",
    "#e6f8d1",
    "#fbd0f3",
    "#ceeaf4",
    "#f9d3d3",
    "#fff4d0",
    "#ffffff"
];

colorBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.querySelector(".container").style.backgroundColor = randomColor;
    document.querySelector(".container").style.backgroundImage = `
    linear-gradient(mediumpurple 1px, transparent 1px),
    linear-gradient(90deg, mediumpurple 1px, transparent 1px)
`;
});
