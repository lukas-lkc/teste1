const cells = document.querySelectorAll(".board div");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.textContent === "") {
      this.textContent = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
}

