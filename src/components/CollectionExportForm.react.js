var React = require('react');

var formStyle = {
  display: 'inline-block',
};

var CollectionExportsForm = React.createClass({
  render: function () {
    return (
      <form action="https://codepen.io/pen/define" method="POST" target="_blank" style={formStyle}>
        <input type="hidden" name="data" value={this.props.htmlMarkup} />
        <button type="submit" className="btn btn-default">Export as html</button>
      </form>
    );
  },
});

module.exports= CollectionExportsForm;
