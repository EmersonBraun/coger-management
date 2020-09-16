let mix = require('laravel-mix')

mix.setPublicPath('public')
  .js('resources/vue/main.js', 'public/js')

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(
        __dirname,
        'resources/vue'
      ),
      '@sass': path.resolve(
        __dirname,
        'resources/vue/sass'
      ),
    },
  },
})
