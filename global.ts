// Importer les modules nécessaires
import path from 'path'
import { fileURLToPath } from 'url'

// Recréer __filename et __dirname
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)
