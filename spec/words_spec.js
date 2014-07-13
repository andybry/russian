describe('Words', function() {

  describe('_init', function() {
    it('sets the words array and default start and end', function() {
      var wordsArray = ['word1', 'word2', 'word3'];
      var words = Words._init(wordsArray);
      expect(words._words).toBe(wordsArray);
      expect(words._startIndex).toBe(0);
      expect(words._endIndex).toBe(2);
    });
  });

  describe('getRandomWord', function() {
    it('Returns a random word between start and end indices inclusive', function() {
      var words = {
        _words: ['word1', 'word2', 'word3', 'word4', 'word5'],
        _startIndex: 2,
        _endIndex: 4
      };
      spyOn(_ , 'random').andReturn(3);
      var actual = Words.getRandomWord.call(words);
      expect(_.random).toHaveBeenCalledWith(2, 4);
      expect(actual).toEqual('word4');
    });
  });

  describe('setStart', function() {
    it('sets the start index', function() {
      var words = {};
      Words.setStart.call(words, 3);
      expect(words._startIndex).toBe(3);
    });
  });

  describe('setCount', function() {
    describe('when there are enough elements', function() {
      it('sets the endIndex so that there the given number of elements', function() {
        var words = {
          _words: ['1', '2', '3', '4', '5'],
          _startIndex: 1
        };
        Words.setCount.call(words, 3);
        expect(words._endIndex).toBe(3);
      });
    });
    describe('when there are not enough elements', function() {
      it('sets the endIndex to the last element', function() {
        var words = {
          _words: ['1', '2', '3', '4', '5'],
          _startIndex: 3
        };
        Words.setCount.call(words, 3);
        expect(words._endIndex).toBe(4);
      });
    });
  });
  
});