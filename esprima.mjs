import jitiFactory from 'jiti'
import { transform } from 'sucrase'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

let jiti = null

// @internal
// This WILL be removed in some future release
// If you rely on this your stuff WILL break
export function useCustomJiti(_jiti) {
  jiti = _jiti()
}

function lazyJiti() {
  return (
    jiti ??
    (jiti = jitiFactory(__filename, {
      interopDefault: true,
      transform: (opts) => {
        return transform(opts.source, {
          transforms: ['typescript', 'imports'],
        })
      },
    }))
  )
}

export function loadConfig(path) {
  let config = (function () {
    try {
      return path ? require(path) : {}
    } catch {
      return lazyJiti()(path)
    }
  })()

  return config.default ?? config
}

console.log(loadConfig('./tailwind.config.js').theme.extend.colors)
