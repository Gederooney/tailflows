import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4"></div>
        <div className="mb-1 flex space-x-2 text-xs text-gray-500 dark:text-gray-400">
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{`built with tailwindcss by rony gédéon`}</div>
        </div>
        <div className="mb-8 text-xs text-gray-500 dark:text-gray-400">
          <span>Le plus grand écosystème pour les développeurs tailwindcss. </span>
        </div>
      </div>
    </footer>
  )
}
