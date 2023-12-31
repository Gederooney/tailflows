import icons from './data.json' assert { type: 'json' }
import fs from 'fs'

const rewritedIcons = icons.map((icon) => ({
  ...icon,
  id: icon.id.replaceAll('-', '_'),
  name: icon.name.replaceAll('-', '_'),
}))

fs.writeFileSync('./data.json', JSON.stringify(rewritedIcons))
