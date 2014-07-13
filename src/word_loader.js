var WordLoader = Base.extend({

  _init: function(pathToWords) {
    this._words = [];
    this._path = pathToWords;
    this._loadWords();
    return this;
  },

  _loadWords: function() {
    var boundParser = _.bind(this._parser, this);
    window.jQuery.ajax(
      this._path, {
        async: false,
        success: boundParser
      }
    );
  },

  _parser: function(data) {
    this._words = data.split('\n');
  },

  words: function() {
    return this._words;
  }

});