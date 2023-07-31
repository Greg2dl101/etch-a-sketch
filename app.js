let reset = document.querySelector("button");
let board = document.querySelector(".board-container");

reset.addEventListener("click", () => {
  resetSize();
});

function resetSize() {
  let number = prompt("What size would you like the baord to be? (1-100)");

  if (number > 100) {
    while (number > 100) {
      number = 0;
      number = prompt("What size would you like the baord to be? (1-100)");
    }
  }

  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  createBoard(number);
}

function createBoard(boardSize) {
  board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

  for (let i = 0; i < boardSize * boardSize; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    board.appendChild(square);

    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "black";
    });

    function resetBoard() {
      reset.addEventListener("click", (e) => {
        square.style.backgroundColor = "white";
      });
    }
  }

  resetBoard();
}

createBoard(16);
