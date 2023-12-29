import colors from '../app/couleurs/colors.json' assert { type: 'json' }
import siteMetadata from '../data/siteMetadata.js'
import fs from 'fs'

const generateColorSitemap = () => {
  const siteUrl = siteMetadata.siteUrl

  let siteMap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><--urls--></urlset>`

  const urlSet = colors.reduce((acc, color) => {
    const params = new URLSearchParams()
    params.append('color', color.hex.toLowerCase())
    params.append('name', color.name.replaceAll(' ', '-'))
    return (
      acc +
      `
    <url>
      <loc>${siteUrl}/couleurs/search?${params.toString().replace(/&/g, '&amp;')}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <priority>0.7</priority>
    </url>
    `
    )
  }, '')

  siteMap = siteMap.replace('<--urls-->', urlSet)
  fs.writeFileSync('./public/sitemap-couleurs.xml', siteMap)
}

generateColorSitemap()
