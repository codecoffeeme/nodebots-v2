import five from 'johnny-five';
import createBoard from '../utilities/create-board.js';

const board = await createBoard();

const lcd = new five.LCD({
  // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
  pins: [12, 11, 5, 4, 3, 2],
  rows: 2,
  cols: 20,
});

board.repl.inject({ lcd });

lcd.cursor(0, 0).print('Hello,');
lcd.cursor(1, 2).print('World!');
