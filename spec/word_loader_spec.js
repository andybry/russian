describe('WordLoader', function() {

  describe('_init', function() {
    it('initialises _words, loads the words and returns the instance', function() {
      var wordLoader = {
        _loadWords: function() {}
      };
      spyOn(wordLoader, '_loadWords');
      var actual = WordLoader._init.call(wordLoader, 'path');
      expect(wordLoader._loadWords).toHaveBeenCalledWith();
      expect(wordLoader._words).toEqual([]);
      expect(wordLoader._path).toEqual('path');
      expect(actual).toBe(wordLoader);
    });
  });

  describe('_loadWords', function() {
    it('sends a request for the words and registers the parser', function() {
      var wordLoader = {
        _parser: function() {},
        _path: 'path'
      };
      var boundParser = function() {};
      spyOn(window._, 'bind').andReturn(boundParser);
      spyOn(window.jQuery, 'ajax');
      WordLoader._loadWords.call(wordLoader);
      expect(window._.bind).toHaveBeenCalledWith(
        wordLoader._parser, wordLoader
      );
      expect(window.jQuery.ajax).toHaveBeenCalledWith(
        'path', {
          async: false,
          success: boundParser
        }
      );
    });
  });

  describe('_parser', function() {
    it('splits the words, and sets them in the _words variable', function() {
      var wordLoader = {};
      var data = 'word1\nword2\nword3';
      WordLoader._parser.call(wordLoader, data);
      expect(wordLoader._words).toEqual([
        'word1',
        'word2',
        'word3'
      ]);
    });
  });

  describe('words', function() {
    it('returns the value of _words', function() {
      var words = {};
      var wordLoader = {
        _words: words
      };
      expect(WordLoader.words.call(wordLoader)).toBe(words);
    });
  });

});