exports.config = {
  namespace: 'onfire',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['on-fire'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}



