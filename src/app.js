var React = require('react');
var ReactDOM = require('react-dom');
// var ReactDOMServer = require('react-dom/server');

var h1 = React.createElement('h1', {className: 'header', key: 'header'}, 'This is React');
var p = React.createElement('p', {className: 'content', key: 'content'}, 'And this is how it works');

var listOfItems =
  <ul className="list-of-items" key="list-of-items">
    <li className="item-1" key="item-1">Item 1</li>
    <li className="item-2" key="item-2">Item 2</li>
    <li className="item-3" key="item-3">Item 3</li>
  </ul>;

var ReactClass = React.createClass({
  getInitialState: function () {
    return {
      isHeaderHidden: false,
    };
  },
  handleClick: function () {
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  },
  render: function () {
    var title = 'Stateful React Component',
        headerElement = React.createElement('h1', {className: 'header', key: 'header'}, title),
        buttonElement = React.createElement(
          'button',
          {
            className: 'btn btn-default',
            onClick: this.handleClick,
            key: 'button',
          },
          'Toggle header'
        );
    if (this.state.isHeaderHidden) {
      return React.createElement('div', null, [buttonElement]);
    }
    return React.createElement('div', null, [buttonElement, headerElement]);
  }
});
var reactComponentElement = React.createElement(ReactClass, {key: 'react-component-element'});

var reactFragment = [h1, p, listOfItems, reactComponentElement];
var section = React.createElement('section', {className: 'container'}, reactFragment);

// console.log(ReactDOMServer.renderToString(section));
ReactDOM.render(section, document.getElementById('react-application'));
