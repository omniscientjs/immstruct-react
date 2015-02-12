var React = require('react');
var immstruct = require('immstruct');

var App = React.createFactory(require('./app'));

var data = immstruct({ counter: 0 });

var render = function () {
  React.render(
    App({ counter: data.cursor('counter') }),
    document.body);
}

render();
data.on('swap', render);

setInterval(function () {
  data.cursor().update('counter', function (i) {
    return i + 1;
  });
}, 1000);

// uncomment to see should component update only re-rendering when cursors change in the console
// setInterval(render, 500);
