var test = require('tap').test
var csi = require('..')

test('default arguments', function(t) {
  t.equal(
    csi.cursorUp.escape('ok'),
    '\x1b[Aok'
  )

  t.end()
})

test('new arguments', function(t) {
  t.equal(
    csi.cursorUp(2).escape('ok', 'yes'),
    '\x1b[2Aok yes'
  )

  t.end()
})

test('chain', function(t) {
  var pos = csi.cursorUp.cursorForward
  t.equal(
    pos(2).eraseLine.red.underline.escape('ok'),
    '\x1b[A\x1b[2C\x1b[K\x1b[31m\x1b[4mok\x1b[0m\x1b[0m'
  )

  t.equal(
    pos(3).eraseLine.green.underline.escape('ok'),
    '\x1b[A\x1b[3C\x1b[K\x1b[32m\x1b[4mok\x1b[0m\x1b[0m'
  )

  t.end()
})

