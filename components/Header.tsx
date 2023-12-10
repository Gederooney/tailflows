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
      <header className="w-full dark:border-b border-white/5">
        <div className="hidden md:flex items-center justify-between py-2 gap-8 shadow-sm drop-shadow-sm max-w-7xl px-6 mx-auto">
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
          <div className="flex flex-1 justify-between items-center space-x-4 leading-5 sm:space-x-6">
            <span></span>
            <ul className="flex gap-4 items-center">
              <li>
                <SearchButton />
              </li>
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <li key={link.title + 'desktop'}>
                    <Link
                      href={link.href}
                      className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
            <ThemeSwitch />
          </div>
        </div>

        <div className="flex md:hidden items-center justify-between py-2 px-4">
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
