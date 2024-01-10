import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="py-12 shadow bg-secondary-900 dark:bg-secondary-800">
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4"></div>
        <div className="flex mb-1 space-x-2 text-xs text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
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
