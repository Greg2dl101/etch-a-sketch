const board = document.querySelector(".board-container");

let boardSize = getUserInput();

function getUserInput() {
  let userInput = window.prompt("Enter the size of the board please:", 16);

  if (userInput !== null) {
    return userInput;
  } else {
    alert("You cancelled!");
  }
}

board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

function createBoard() {
  for (let i = 0; i < boardSize * boardSize; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.setAttribute("style", "background: orange;");

    square.setAttribute("id", `square ${i}`);

    board.appendChild(square);

    square.addEventListener("mouseover", function (e) {
      e.target.setAttribute("style", "background: blue;");
    });
  }
}

createBoard();
