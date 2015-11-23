// https://en.wikipedia.org/wiki/ANSI_escape_code
var ESC = '\x1b['
var escapes = [
  {
    code: 'A',
    name: ['cursorUp', 'cuu', 'up'],
  },
  {
    code: 'B',
    name: ['cursorDown', 'cud', 'down'],
  },
  {
    code: 'C',
    name: ['cursorForward', 'cuf', 'forward'],
  },
  {
    code: 'D',
    name: ['cub', 'cursorBackward', 'cursorBack', 'back'],
  },
  {
    code: 'E',
    name: ['cursorNextLine', 'cnl'],
  },
  {
    code: 'F',
    name: ['cursorPreviousLine', 'cpl'],
  },
  {
    code: 'G',
    name: ['cursorColumn', 'cha'],
  },
  {
    code: 'H',
    name: ['cursorPosition', 'cup'],
  },
  {
    code: 'J',
    name: ['eraseDisplay', 'ed'],
  },
  {
    code: 'K',
    name: ['eraseLine', 'el'],
  },
  {
    code: 'S',
    name: ['scrollUp', 'su'],
  },
  {
    code: 'T',
    name: ['scrollDown', 'sd'],
  },
  {
    code: 'f',
    name: ['cursorHVPosition', 'hvp'],
    description: 'Horizontal and Vertical Position',
  },
  {
    code: 's',
    name: ['saveCursorPosition', 'scp'],
  },
  {
    code: 'u',
    name: ['restoreCursorPosition', 'rcp'],
  },
  {
    code: '?25l',
    name: ['hideCursor', 'hide'],
  },
  {
    code: '?25h',
    name: ['showCursor', 'show'],
  },
  {
    code: 'm',
    name: ['selectGraphicRendition', 'sgr'],
    fn: function (n) {
      // https://en.wikipedia.org/wiki/ANSI_escape_code#graphics
      n = n == null ? 0 : n
      return function (str) {
        str = str || ''
        return n === 0
          ? str + ESC + n + 'm'
          : ESC + n + 'm' + str
      }
    },
  },
]
escapes.forEach(function (escape) {
  var fn = escape.fn || function (n, m) {
    n = n == null ? '' : n
    m = m == null ? '' : ';' + m
    return function (str) {
      str = str || ''
      return ESC + n + m + escape.code + str
    }
  }
  ;[].concat(escape.name).forEach(function (name) {
    exports[name] = fn
  })
})

