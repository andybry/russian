var Words = Base.extend({

  _init: function(wordsArray) {
    this._words = wordsArray;
    this._startIndex = 0;
    this._endIndex = this._words.length - 1;
    return this;
  },

  getRandomWord: function() {
    var random = _.random(this._startIndex, this._endIndex);
    return this._words[random];
  },

  setStart: function(startIndex) {
    this._startIndex = startIndex;
  },

  setCount: function(count) {
    this._endIndex = this._startIndex + count -1;
    if(this._endIndex >= this._words.length) {
      this._endIndex = this._words.length - 1;
    }
  }

});