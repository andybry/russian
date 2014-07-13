var BodyClick = Base.extend({

  _init: function(words) {
    this._words = words;
    var boundHandler = _.bind(this.handler, this);
    window.jQuery('body').click(boundHandler);
    return this;
  },

  handler: function() {
    var word = this._words.getRandomWord();
    window.jQuery('body #word').remove();
    window.jQuery('body').append(
      '<h1 id="word">' + word + '</h1>'
    );
  }

});