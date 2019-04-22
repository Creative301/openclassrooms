class Game {
  constructor(selector) {
    this.ROWS = 10;
    this.COLS = 10;
    this.selector = selector;
    this.player = "one";
    this.isGameOver = false;
    this.createGrid();
    this.setupEventListeners();
    this.generateRandomColNum();
    this.generateRandomRowNum();
    this.movePlayer();
    this.addPlayerOne();
  }

  // Create the grid
  createGrid() {
    const $board = $(this.selector);
    this.isGameOver = false;
    this.player = "one";
    for (let row = 0; row < this.ROWS; row++) {
      const $row = $("<div>").addClass("row");
      for (let col = 0; col < this.COLS; col++) {
        const $col = $("<div>")
          .addClass("col")
          .attr("data-col", col)
          .attr("data-row", row);

        // Generate random obstacles
        if (Math.random() < 0.1) {
          $col.addClass("obstacles");
        }
        $row.append($col);
      }
      $board.append($row);
    }
  }

  setupEventListeners() {
    const $board = $(this.selector);
    $board.on("mouseenter", ".col", function() {
      const col = $(this).data("col");
      const row = $(this).data("row");
      // console.log(col, row);
    });
  }

  generateRandomColNum() {
    return Math.floor(Math.random() * this.COLS);
  }

  generateRandomRowNum() {
    return Math.floor(Math.random() * this.ROWS);
  }

  movePlayer() {
    $(document).keydown(function(e) {
      // console.log(e.keyCode);

      let position = $("#playerOne").position();
      // console.log(position);

      switch (e.keyCode) {
        case 37: // Left
          $("#playerOne").css("left", position.left - 45 + "px");
          break;
        case 38: // Up
          $("#playerOne").css("top", position.top - 45 + "px");
          break;
        case 39: // Right
          $("#playerOne").css("left", position.left + 45 + "px");
          break;
        case 40: // Down
          $("#playerOne").css("top", position.top + 45 + "px");
          break;
      }
    });
  }

  addPlayerOne() {
    const playerOne = '<div id = "playerOne"></div>';
    let randomColNum = this.generateRandomColNum();
    let randomROwNum = this.generateRandomRowNum();
    let $cell = $(`.col[data-col=${randomColNum}][data-row=${randomROwNum}]`);
    // console.log($cell);
    $cell.append(playerOne);
  }
}

$(document).ready(function() {
  const game = new Game("#board");
});
