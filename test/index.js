var test = require('tape')
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
    csi.cursorUp(2).escape('ok'),
    '\x1b[2Aok'
  )

  t.end()
})

test('chain', function(t) {
  t.equal(
    csi
      .cursorUp
      .cursorForward(2)
      .eraseLine
      .red
      .underline
      .escape('ok'),
    '\x1b[A\x1b[2C\x1b[K\x1b[31m\x1b[4mok\x1b[0m\x1b[0m'
  )

  t.end()
})

