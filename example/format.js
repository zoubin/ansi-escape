var csi = require('..')

console.log(
  csi.escape(
    'Age: %d, Size: %j',
    10,
    { h: 180, w: 80 }
  )
)

