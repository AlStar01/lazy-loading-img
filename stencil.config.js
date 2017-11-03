exports.config = {
  namespace: 'lazyloadingimg',
  generateDistribution: true,
  bundles: [
    { components: ['lazy-loading-img'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
