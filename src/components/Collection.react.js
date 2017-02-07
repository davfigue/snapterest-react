var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    CollectionControls = require('./CollectionControls.react'),
    TweetList = require('./TweetList.react'),
    Header = require('./Header.react');

var Collection = React.createClass({

  createHtmlMarkupStringOfTweetList: function () {
    var htmlMarkup = {
      html: ReactDOMServer.renderToStaticMarkup(<TweetList tweets={this.props.tweets} />),
    };

    return JSON.stringify(htmlMarkup);
  },

  getListOfTweetIds: function () {
    return Object.keys(this.props.tweets);
  },

  getNumberOfTweetsInCollection: function () {
    return this.getListOfTweetIds().length;
  },

  render: function () {
    var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

    if (!numberOfTweetsInCollection) {
      return <Header text='Your collection is empty' />
    }

    var tweets = this.props.tweets,
        htmlMarkup = this.createHtmlMarkupStringOfTweetList(),
        removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection,
        handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

    return (
      <div>
        <CollectionControls
          numberOfTweetsInCollection={numberOfTweetsInCollection}
          htmlMarkup={htmlMarkup}
          onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
        />

        <TweetList
          tweets={tweets}
          onRemoveTweetFromCollection={handleRemoveTweetFromCollection}
        />
      </div>
    );
  },
});

module.exports = Collection;
