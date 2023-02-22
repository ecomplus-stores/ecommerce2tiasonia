const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/DiscountApplier.html': path.resolve(__dirname, 'template/js/custom-js/html/DiscountApplier.html'),
      './js/DiscountApplier.js': path.resolve(__dirname, 'template/js/custom-js/js/DiscountApplier.js')
    }
  }
})
