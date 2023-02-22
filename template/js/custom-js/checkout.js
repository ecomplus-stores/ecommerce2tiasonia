// Add your custom JavaScript for checkout here.

window.EcomSearch.dslMiddlewares.push((dsl) => {
  dsl.query.bool.filter.push({
    terms: {
      'categories.name': ['Ultrabar']
    }
  })
})
