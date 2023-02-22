// Add your custom JavaScript for storefront pages here.

window.EcomSearch.dslMiddlewares.push((dsl) => {
  dsl.query.bool.filter.push({
    terms: {
      'categories.name': ['Ultrabar']
    }
  })
})
