describe('BodyClick', function() {

  describe('on first click', function() {
    it('populates the body with a random word on click', function() {
      var wordLoader = WordLoader.create('/base/russian_words.txt');
      var words = Words.create(wordLoader);
      spyOn(words, 'getRandomWord').andReturn('word1');
      BodyClick.create(words);
      $('body').click();
      var $words = $('body #word');
      expect($words.length).toBe(1);
      expect($words.text()).toEqual('word1');
    });
  });

  describe('on first click', function() {
    it('populates the body with a random word on click', function() {
      var wordLoader = WordLoader.create('/base/russian_words.txt');
      var words = Words.create(wordLoader);
      var callCount = 0;
      spyOn(words, 'getRandomWord').andCallFake(function() {
        if(callCount === 0) {
          callCount++;
          return 'word1';
        } else {
          return 'word2';
        }
      });
      BodyClick.create(words);
      $('body').click().click();
      var $words = $('body #word');
      expect($words.length).toBe(1);
      expect($words.text()).toEqual('word2');
    });
  });
});