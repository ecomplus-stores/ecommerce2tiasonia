const path = require('path')

const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')
const pathDslAlias = path.resolve(dirSearchAlias, 'dsl')

module.exports = () => ({
  resolve: {
    alias: {
      './lib/dsl': pathDslAlias,
      './../lib/dsl': pathDslAlias,
      '../lib/dsl': pathDslAlias,
      './html/DiscountApplier.html': path.resolve(__dirname, 'template/js/custom-js/html/DiscountApplier.html'),
      './js/DiscountApplier.js': path.resolve(__dirname, 'template/js/custom-js/js/DiscountApplier.js')
    }
  }
})