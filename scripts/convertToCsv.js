const fs = require('fs')
const path = require('path')
const { Parser } = require('json2csv')

const jsonFilePath = path.join(__dirname, '../data/', 'icons.json') // Chemin du fichier JSON source
const csvFilePath = path.join(__dirname, '../data', 'icons.csv') // Chemin où le fichier CSV sera sauvegardé

// Lire le fichier JSON
const icons = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8')).map((icon) => ({
  ...icon,
  codepoint: '' + icon.codepoint,
  version: icon.version ?? 1,
  popularity: icon.popularity ?? 10,
}))

// Utiliser json2csv pour transformer le JSON en CSV
const json2csvParser = new Parser()
const csv = json2csvParser.parse(icons)

// Sauvegarder le CSV dans un nouveau fichier
fs.writeFileSync(csvFilePath, csv)

console.log('Conversion terminée. Fichier CSV sauvegardé :', csvFilePath)
