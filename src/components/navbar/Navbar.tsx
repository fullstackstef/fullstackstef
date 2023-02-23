import { Roboto_Mono } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/components/icons/Logo'

import useMediaQuery from '@/hooks/useMediaQuery'

import styles from 'src/components/navbar/Navbar.module.css'

const robMono = Roboto_Mono({ subsets: ['latin'], weight: '500' })

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo width={75} height={83} />
      </Link>
      <nav className={`${styles.nav} ${robMono.className}`}>
        <ul>
          <li>
            <Link href="#about">about</Link>
          </li>
          <li>
            <Link href="#experience">experience</Link>
          </li>
          <li>
            <Link href="#contact">contact</Link>
          </li>
          <li>
            <a
              href=""
              download="test.pdf"
              title="stefan_trivuncic_resume.pdf"
              className={styles.navBtn}
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
