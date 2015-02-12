var React = require('react');
var div = React.DOM.div;

var omniscient = require('omniscient');
omniscient.debug();
var shouldUpdate = omniscient.shouldComponentUpdate;

var ShouldComponentUpdateMixin = [{ shouldComponentUpdate: shouldUpdate }];

module.exports = React.createClass({

  displayName: "App",

  mixins: ShouldComponentUpdateMixin,

  render: function () {
    return div({ className: 'app' },
              this.props.counter.deref());
  }
});
