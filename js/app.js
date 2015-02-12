var React = require('react');
var div = React.DOM.div;

var shouldUpdate = require('omniscient/shouldupdate');
shouldUpdate.debug();

var ShouldComponentUpdateMixin = [{ shouldComponentUpdate: shouldUpdate }];

module.exports = React.createClass({

  displayName: "App",

  mixins: ShouldComponentUpdateMixin,

  render: function () {
    return div({ className: 'app' },
              this.props.counter.deref());
  }
});
