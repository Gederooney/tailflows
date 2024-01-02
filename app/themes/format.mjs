import themes from './data.json' assert { type: 'json' }
import { v4 } from 'uuid'
import fs from 'fs'

const rewritedThemes = themes.map((theme) => {
  let id = theme.id
  if (!id) id = v4().replaceAll('-', '_')
  return { ...theme, id }
})

fs.writeFileSync('./app/themes/data.json', JSON.stringify(rewritedThemes))
