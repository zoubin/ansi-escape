function CSI(escape) {
  this.escape = typeof escape === 'function' ? escape : identity
}

function identity(s) {
  return s
}

function defineEscape(name, creator) {
  Object.defineProperty(CSI.prototype, name, {
    get: function () {
      var self = this
      var escape = creator()
      function csi() {
        escape = creator.apply(null, arguments)
        return new CSI(function (str) {
          return self.escape(escape(str))
        })
      }
      csi.escape = function (str) {
        return self.escape(escape(str))
      }
      /* eslint-disable no-proto */
      csi.__proto__ = CSI.prototype
      return csi
    },
  })
}

function defineEscapes(escapes) {
  Object.keys(escapes).forEach(function (name) {
    defineEscape(name, escapes[name])
  })
}

defineEscapes(require('./lib/escapes'))
defineEscapes(require('./lib/colors'))

exports = module.exports = new CSI()
exports.CSI = CSI
exports.defineEscape = defineEscape
exports.defineEscapes = defineEscapes

