var fs = require('fs');
var postcss = require('postcss');
var styleguide = require('postcss-style-guide');
var input = fs.readFileSync('css/envoy.css', 'utf8');

var output = postcss([
  styleguide({
    project: require("./package.json").version,
    showCode: true,
    dest: 'docs/index.html',
    theme: 'Envoy',
    themePath: 'psg-theme',
  })
]).process(input)
.then(function (reuslt) {
  var output = fs.readFileSync('docs/index.html', 'utf8');
  console.log('output:', output);
});
