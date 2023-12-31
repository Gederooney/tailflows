import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <>
      <header className="w-full shadow dark:border-b border-white/5">
        <div className="items-center justify-between hidden gap-8 px-6 py-2 mx-auto md:flex max-w-7xl">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-1 mr-3">
                  <Logo />
                  <span className="text-xl select-none">tailflows</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between flex-1 space-x-4 leading-5 sm:space-x-6">
            <span></span>
            <ul className="flex items-center gap-4">
              <li>
                <SearchButton />
              </li>
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <li key={link.title + 'desktop'}>
                    <Link
                      href={link.href}
                      className="hidden text-sm font-medium text-gray-900 dark:text-gray-50/50 sm:block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
            <ThemeSwitch />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2 md:hidden">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-1 mr-3">
                  <Logo />
                  <span className="text-lg select-none">tailflows</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitch />
            <SearchButton />
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
