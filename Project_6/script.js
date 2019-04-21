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
    this.test();
    // this.addPlayerOne(); 
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
    return (Math.floor(Math.random() * this.COLS) + 1);
    // console.log(Math.floor(Math.random() * this.COLS) + 1);
  }

  generateRandomRowNum() {
    return Math.floor(Math.random() * this.ROWS) + 1;
  }

  test() {
    const playerOne = '<div id = "playerOne"></div>';
    let randomColNum = this.generateRandomColNum();
    let randomROwNum = this.generateRandomRowNum();
    let $cell = $(`.col[data-col=${randomColNum}][data-row=${randomROwNum}]`)
    console.log($cell);
    // $cell.addClass('playerOne');
    $cell.append(playerOne);
  }

/*   addPlayerOne() {
    const playerOne = '<div id = "playerOne"></div>';
    let colNum = generateRandomColNum().toString();
    let rowNum = generateRandomRowNum().toString();
    if ($("input[value='data-row']") === rowNum  && $("input[value='data-col']") === colNum ) {
      $('col').append(playerOne);
    }
  } */
}

$(document).ready(function() {
  const game = new Game("#board");
});
