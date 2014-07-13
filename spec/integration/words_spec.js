describe('Words', function() {

  describe('when no start and count is given', function() {
    it('returns a random word', function() {
      var wordsArray = [
        'word 1',
        'word 2',
        'word 3',
        'word 4',
        'word 5'
      ];
      var words = Words.create(wordsArray);
      var word = words.getRandomWord();
      expect(_.contains(wordsArray, word));
    });
  });

  describe('when a start and count is given', function() {
    it('returns a random word from the range', function() {
      var wordsArray = [
        'word 1',
        'word 2',
        'word 3',
        'word 4',
        'word 5'
      ];
      var words = Words.create(wordsArray);
      words.setStart(2);
      words.setCount(2);
      var word = words.getRandomWord();
      expect(_.contains(['word 3', 'word 4']), word);
    });
  });

});