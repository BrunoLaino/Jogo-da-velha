document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert(
        "O Jogo Acabou -> O Vencedor foi o jogador: " + parseInt(playerTime + 1)
      );
    }, 10);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function restartGame() {
  let squares = document.querySelectorAll(".square");
  resetGameParameters();

  squares.forEach((square) => {
    square.innerHTML = ``;
  });
}
