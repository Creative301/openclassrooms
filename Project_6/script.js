class Game {
    constructor(selector) {
      this.ROWS = 9;
      this.COLS = 10;
      this.selector = selector;
      this.player = 'one';
      this.isGameOver = false;
      this.createGrid();
      this.setupEventListeners();
      this.generateRandomRowNumber(); 
      this.onPlayerMove = function() {}
    }

    // Create the grid
    createGrid() {
      const $board = $(this.selector);
      this.isGameOver = false;
      this.player = 'one';
      for (let row = 0; row < this.ROWS; row++) {
        const $row = $('<div>').addClass('row');
        for (let col = 0; col < this.COLS; col++) {
          const $col = $('<div>').addClass('col empty').attr('data-col', col).attr('data-row', row);
          // Generate random obstacles
          if (Math.random() < 0.1) {
            $col.addClass('obstacles');
          }
          $row.append($col);
        }
        $board.append($row);
      }
    }

    addPlayer() {

    }
    
  /*   generateRandomRowNumber(index) {
      return Math.floor(Math.random() * index);
    } */

/*     generateRandomRowNumber() {
      console.log(Math.floor(Math.random() * this.ROWS));
    } */

    // generateRandomRowNumber();
    // console.log(generateRandomRowNumber(this.ROWS));

    generateRandomColNumber() {
      return Math.floor(Math.random() * this.COLS);
    }


    setupEventListeners() {
      const $board = $(this.selector);

      $board.on('mouseenter', '.col.empty', function() {
        const col = $(this).data('col');
        const row = $(this).data('row');

        console.log(col, row);
      })
    }




}


$(document).ready(function () {
  const game = new Game('#board');
});