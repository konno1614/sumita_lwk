const path = require('path')

module.exports = {
  server: {
    baseDir: path.resolve(__dirname, '..'),
  },
  startPath: '/public',
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false,
  }
}
