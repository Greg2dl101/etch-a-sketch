const board = document.querySelector(".board-container");

board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.setAttribute("style", "border: 1px solid black;  background: orange;");
  square.setAttribute("id", `square ${i}`);

  board.appendChild(square);

  square.addEventListener("mouseover", function (e) {
    e.target.setAttribute("style", "background: blue;");
  });
}
