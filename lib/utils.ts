import { load } from 'cheerio'

export const getSvgAttr = (svgStr: string) => {
  const $ = load(svgStr)

  // Select the SVG element
  const svg = $('svg')

  // Object to hold the attributes key-value pairs
  const attributes = {}

  // Get all attributes of the SVG element and add to the attributes object
  svg.each((i, elem) => {
    Object.entries(elem.attribs).forEach(([key, value]) => {
      attributes[key] = value
    })
  })

  return attributes
}

export const formatSvg = (svgString: string) => {
  const attr = getSvgAttr(svgString)

  let newString = svgString
  let classnames = 'w-full h-full '

  newString = newString.replace('width="24"', '').replace('height="24"', '')

  if (attr['fill']) {
    classnames += attr['fill'] === 'none' ? 'fill-none ' : 'fill-current '
    newString = newString.replace('fill="currentColor"', '').replace('fill="none"', '')
  }
  if (attr['stroke']) {
    classnames += attr['stroke'] === 'none' ? 'stroke-none ' : 'stroke-current '
    newString = newString.replace('stroke="currentColor"', '').replace('stroke="none"', '')
  }

  if (!classnames.includes('fill-') && !classnames.includes('stroke-'))
    classnames += 'fill-current '

  newString = newString.replace('viewBox=', `class="${classnames}" viewBox=`)
  return newString
}

export const copyToClipboard = async (textToCopy: string) => {
  // Using the Clipboard API to copy the text
  return navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      return true
    })
    .catch((err) => {
      return false
    })
}
export const downloadSVGFile = (svg: string, name: string) => {
  const blob = new Blob([svg], {
    type: 'image/svg+xml',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${name.replace('.svg', '')}.svg`
  a.click()
  return
}

export const downloadSbgAsPng = (svgString: string, filename: string) => {
  // Convert SVG string to Blob
  const blob = new Blob([svgString], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)

  // Load SVG in Image and draw to canvas
  const img = new Image()
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.drawImage(img, 0, 0)
      // Convert canvas to PNG Data URL
      canvas.toBlob((blob) => {
        // Create download link and trigger download
        if (!blob) return
        const downloadUrl = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = downloadUrl
        a.download = `${filename}.png`
        document.body.appendChild(a)
        a.click()

        // Cleanup
        document.body.removeChild(a)
        URL.revokeObjectURL(downloadUrl)
        URL.revokeObjectURL(url)
      }, 'image/png')
    }
  }
  img.src = url
}

export const svgToJSXString = (svgString: string) => {
  const possibleSVGAttr = [
    'xmlns',
    'height',
    'viewBox',
    'width',
    'fill',
    'stroke',
    'stroke-width',
    'stroke-linecap',
    'stroke-linejoin',
  ]

  const jsxString = svgString
    .replaceAll('class=', 'className=')
    .replaceAll('stroke-width', 'strokeWidth')
    .replaceAll('stroke-linecap', 'strokeLinecap')
    .replaceAll('stroke-linejoin', 'strokeLinejoin')
    .replaceAll('stroke-opacity', 'strokeOpacity')
    .replaceAll('stroke-dasharray', 'strokeDasharray')
    .replaceAll('stroke-dasharray', 'strokeDasharray')
    .replaceAll('stroke-miterlimit', 'strokeMiterlimit')

  return jsxString
}

export function svgToDataURLBase64(svgString: string) {
  // Base64 encode the SVG string
  const base64EncodedSVG = btoa(unescape(encodeURIComponent(svgString)))

  // Construct the Data URL with Base64 encoding
  return `data:image/svg+xml;base64,${base64EncodedSVG}`
}

export function svgToDataURL(svgString: string) {
  const encodedSvg = encodeURIComponent(svgString)
    .replace(/'/g, '%27') // Encode single quotes
    .replace(/"/g, '%22') // Encode double quotes

  return `data:image/svg+xml,${encodedSvg}`
}
