describe('BodyClick', function() {

  describe('_init', function() {
    it('saves a reference to words and attaches the click handler', function() {
      var words = {};
      var bodyClick = {
        handler: function() {}
      };
      var $body = {
        click: function() {}
      };
      var boundHandler = function() {};
      spyOn(_, 'bind').andReturn(boundHandler);
      spyOn(window, 'jQuery').andReturn($body);
      spyOn($body, 'click');
      BodyClick._init.call(bodyClick, words);
      expect(bodyClick._words).toBe(words);
      expect(_.bind).toHaveBeenCalledWith(bodyClick.handler, bodyClick);
      expect(window.jQuery).toHaveBeenCalledWith('body');
      expect($body.click).toHaveBeenCalledWith(boundHandler);
    });
  });
  
  describe('handler', function() {
    it('adds a random word to the body', function() {
      var words = {
        getRandomWord: function () {
        }
      };
      var bodyClick = {
        _words: words
      };
      var $body = {
        append: function () {
        }
      };
      var $word = {
        remove: function() {}
      };
      spyOn(words, 'getRandomWord').andReturn('myWord');
      spyOn(window, 'jQuery').andCallFake(function(selector) {
        switch(selector) {
          case 'body': return $body;
          case 'body #word': return $word;
        }
      });
      spyOn($body, 'append');
      spyOn($word, 'remove');
      BodyClick.handler.call(bodyClick);
      expect(words.getRandomWord).toHaveBeenCalledWith();
      expect(window.jQuery).toHaveBeenCalledWith('body #word');
      expect($word.remove).toHaveBeenCalledWith();
      expect($body.append).toHaveBeenCalledWith(
        '<h1 id="word">myWord</h1>'
      );
    });
  });

});