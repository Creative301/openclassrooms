class Game {
    constructor(selector) {
      this.ROWS = 9;
      this.COLS = 10;
      this.selector = selector;
      this.player = 'one';
      this.isGameOver = false;
      this.createGrid();
      // this.setupEventListeners();
      this.onPlayerMove = function() {}
    }

    createGrid() {
      const $board = $(this.selector);
      this.isGameOver = false;
      this.player = 'one';
      for (let row = 0; row < this.ROWS; row++) {
        const $row = $('<div>').addClass('row');
        for (let col = 0; col < this.COLS; col++) {
          const $col = $('<div>').addClass('col empty').attr('data-col', col).attr('data-row', row);
          $row.append($col);
        }
        $board.append($row);
      }
    }





}


$(document).ready(function () {
  const game = new Game('#game');
});