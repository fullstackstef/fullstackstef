import { useState } from 'react'
import { Roboto_Mono } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/components/icons/Logo'
import Menu from '@/components/icons/Menu'
import Close from '@/components/icons/Close'

import styles from 'src/components/mobileNavbar/MobileNavbar.module.css'

const robMono = Roboto_Mono({ subsets: ['latin'], weight: '500' })

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpenClick = () => setOpen(!open)
  const handleCloseClick = () => setOpen(false)
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo width={38} height={42} />
      </Link>
      {!open && (
        <div onClick={handleOpenClick}>
          <Menu width={25} height={27} />
        </div>
      )}

      <div
        className={`${styles.nav_wrapper} ${
          open && styles.nav_wrapper_clicked
        }`}
      >
        <div className={styles.nav_wrapper_header}>
          <Link href="/" onClick={handleCloseClick}>
            <Logo width={38} height={42} />
          </Link>
          <div onClick={handleOpenClick}>
            <Close width={25} height={22} />
          </div>
        </div>
        <nav className={`${styles.nav} ${robMono.className}`}>
          <ul>
            <li>
              <Link href="#about" onClick={handleCloseClick}>
                about
              </Link>
            </li>
            <li>
              <Link href="#experience" onClick={handleCloseClick}>
                experience
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={handleCloseClick}>
                contact
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/stefan-trivuncic-92034293/"
                target="_blank"
                rel="noreferrer"
                className={styles.navBtn}
              >
                resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MobileNavbar
