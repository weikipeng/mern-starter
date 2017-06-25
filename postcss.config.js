module.exports = {
  plugins: [
    require('postcss-focus'),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    require('postcss-reporter')({
      clearMessages: true,
    })
    // require('precss'),
    // require('autoprefixer')
  ]
}

// var cssnext = require('postcss-cssnext');
// var postcssFocus = require('postcss-focus');
// var postcssReporter = require('postcss-reporter');

// postcss: () => [
//   postcssFocus(),
//   cssnext({
//     browsers: ['last 2 versions', 'IE > 10'],
//   }),
//   postcssReporter({
//     clearMessages: true,
//   }),
// ],
