console.log("hello");

const board = document.querySelector(".board-container");

board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.style.backgroundColor = "blue";
  square.style.border = ".1px solid black";
  board.insertAdjacentElement("beforeend", square);
}

square.forEach((square) =>
  square.addEventListener("mouseover", function (e) {
    e.style.backgroundColor = "red";
  })
);
