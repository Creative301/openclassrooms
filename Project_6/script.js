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
    this.addPlayerOne();
    this.movePlayer();
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
          let $obstacles = $("<div>")
            .addClass("obstacles")
            .attr("data-col", col)
            .attr("data-row", row);
          $col.append($obstacles);
        }
        $row.append($col);
      }
      $board.append($row);
    }
  }

  setupEventListeners() {
    const $board = $(this.selector);
    $board.on("mouseenter", ".col", () => {
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

  addPlayerOne() {
    const playerOne = '<div id = "playerOne"></div>';
    let randomColNum = this.generateRandomColNum();
    let randomROwNum = this.generateRandomRowNum();
    let $cell = $(`.col[data-col=${randomColNum}][data-row=${randomROwNum}]`);
    // $($cell).attr('id', 'playerOne');
    // console.log($cell);
    $cell.append(playerOne);
  }

  // Move the player
  movePlayer(e) {
    let offset = [0, 0];
    let playerOne = $("#playerOne");
    let isDown = false;
    playerOne.mousedown(e => {
      isDown = true;
      offset = [
        playerOne.offsetLeft - e.clientX,
        playerOne.offsetTop - e.clientY
      ];
    }, false);

    playerOne.mouseup(() => {
      isDown = false;
    }, false);

    playerOne.mousemove(e => {
      event.preventDefault();
      if (isDown) {
        playerOne.style.left = e.clientX + offset[0] + "px";
        playerOne.style.top = e.clientY + offset[1] + "px";
      }
    }, false);
  }
}

$(document).ready(function() {
  const game = new Game("#board");

  // Move the player
  /* let offset = [0, 0];
  let divOverlay = document.getElementById("playerOne");
  let isDown = false;
  divOverlay.addEventListener(
    "mousedown",
    function(e) {
      isDown = true;
      offset = [
        divOverlay.offsetLeft - e.clientX,
        divOverlay.offsetTop - e.clientY
      ];
    },
    false
  );
  document.addEventListener(
    "mouseup",
    function() {
      isDown = false;
    },
    false
  );

  document.addEventListener(
    "mousemove",
    function(e) {
      event.preventDefault();
      if (isDown) {
        divOverlay.style.left = e.clientX + offset[0] + "px";
        divOverlay.style.top = e.clientY + offset[1] + "px";
      }
    },
    false
  ); */
});

// Limit player movement
/* function moveDiv(e) {
  if (!e) {
    e = window.event;
  }
  let el = document.getElementById("playerOne");
  x = e.clientX - this.offsetLeft - this.clientLeft - el.offsetWidth / 2;
  y = e.clientY - this.offsetTop - this.clientTop - el.offsetHeight / 2;

  el.style.left =
    Math.min(Math.max(0, x), this.clientHeight - el.offsetWidth) + "px";
  el.style.top =
    Math.min(Math.max(0, y), this.clientHeight - el.offsetHeight) + "px";
}

document.getElementById("board").addEventListener("mousemove", moveDiv); */
