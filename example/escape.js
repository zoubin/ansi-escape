var csi = require('..')

var conf = [
  ['red', 'bold', '1'.repeat(10)],
  ['green', 'underline', '2'.repeat(8)],
  ['blue', '3'.repeat(6)],
  ['cyan', 'blink', '4'.repeat(4)],
  ['yellow', 'italic', 'bgGreen', '5'.repeat(2)],
]

console.log(' '.repeat(10))

var offset = 1

;(function print() {
  update(conf.shift())
  if (conf.length) {
    setTimeout(print, 400)
  }
})()

function update(info) {
  var str = info.pop()
  var format = csi.cursorUp.cursorColumn(offset++)
  while (info.length) {
    format = format[info.shift()]
  }
  console.log(format.escape(str))
}
