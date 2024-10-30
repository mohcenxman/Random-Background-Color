let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];
for (let i=0; i<6; i++) {
    colorParts.push(hex[Math.floor(Math.random() * hex.length)]);
}
let color = `#${colorParts.join("")}`;
document.body.append(color);
document.body.style.backgroundColor = color;