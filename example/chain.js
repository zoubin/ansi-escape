var csi = require('..')

String.prototype.repeat = function (n) {
  return (new Array(n + 1)).join(this)
}

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

