const d3 = require('d3-dsv')
const fs = require('fs')

const lemmaData = fs.readFileSync(`${__dirname}/lemma.csv`, 'utf8')
const lemmas = d3.csvParse(lemmaData)
const wordsData = fs.readFileSync(`${__dirname}/words.csv`, 'utf8')
const wordForms = d3.csvParse(lemmaData)

module.exports = {
  lemmas,
  wordForms
}
