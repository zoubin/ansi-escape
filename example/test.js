var cli = require('..')

console.log('1'.repeat(10))
console.log(
  cli.up.forward(2).eraseLine.escape('2'.repeat(4))
)

