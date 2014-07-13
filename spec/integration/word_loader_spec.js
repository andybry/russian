describe('WordLoader', function() {
  it('loads all words', function() {
    var wordLoader = WordLoader.create('/base/russian_words.txt');
    var words = wordLoader.words();
    expect(words.length).toBe(32617);
    expect(words[0]).toEqual('и');
    expect(words[32616]).toEqual('выравнивание');
  });
});