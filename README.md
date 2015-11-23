# ansi-escape
ANSI escape codes for manipulating the terminal

[![npm](https://nodei.co/npm/ansi-escape.png?downloads=true)](https://www.npmjs.org/package/ansi-escape)

[![version](https://img.shields.io/npm/v/ansi-escape.svg)](https://www.npmjs.org/package/ansi-escape)
[![status](https://travis-ci.org/zoubin/ansi-escape.svg?branch=master)](https://travis-ci.org/zoubin/ansi-escape)
[![dependencies](https://david-dm.org/zoubin/ansi-escape.svg)](https://david-dm.org/zoubin/ansi-escape)
[![devDependencies](https://david-dm.org/zoubin/ansi-escape/dev-status.svg)](https://david-dm.org/zoubin/ansi-escape#info=devDependencies)


## Usage

```javascript
var csi = require('ansi-escape')

console.log('1'.repeat(8))
console.log(
  csi
    // underline text
    .underline

    // red text
    .red

    // move cursor one line up
    .cursorUp

    // move cursor 2 cells forward
    .cursorForward(2)

    // the text to be escaped
    .escape('2'.repeat(4))
)

```

Output:

![chain](example/chain.png)

## API

### cursorUp(n = 1)
### cuu(n = 1)

### cursorDown(n = 1)
### cud(n = 1)

### cursorForward(n = 1)
### cuf(n = 1)

### cursorBack(n = 1)
### cursorBackward(n = 1)
### cub(n = 1)

Moves the cursor `n` (default 1) cells in the given direction.
If the cursor is already at the edge of the screen, this has no effect.

### cursorColumn(n = 1)
### cha(n = 1)

Moves the cursor to column `n`.

### cursorPosition(n = 1, m = 1)
### cup(n = 1, m = 1)

Moves the cursor to row `n`, column `m`.

### Modifiers
