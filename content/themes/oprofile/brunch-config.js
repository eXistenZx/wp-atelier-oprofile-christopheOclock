// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/
      }
  },
  stylesheets: {joinTo: 'css/app.css'}
};

exports.plugins = {
    // sass: {
    //     options: {
    //         includePaths: ['node_modules/font-awesome/scss']
    //     }
    // },
    browserSync: {
        files: [
            '*'
        ]
    },
    copycat: {
        'fonts': ['node_modules/font-awesome/fonts']
    }
};

exports.npm = {
    styles: {
        'normalize.css': ['normalize.css'],
        'font-awesome': ['css/font-awesome.css']
    }
}
