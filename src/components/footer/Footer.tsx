import { use, useState } from 'react'
import { Roboto_Mono } from '@next/font/google'
import Link from 'next/link'

import styles from 'src/components/footer/Footer.module.css'

import Github from '@/components/icons/Github'
import LinkedIn from '@/components/icons/LinkedIn'
import Twitter from '@/components/icons/Twitter'

const robMono = Roboto_Mono({ subsets: ['latin'], weight: '500' })

const Footer = () => {
  const [selectIds, setSelectIds] = useState<number[]>([])

  const handleHoverIn = (id: number) => setSelectIds([...selectIds, id])

  const handleHoverOut = (id: number) => {
    const filteredIds = selectIds.filter((selectId) => selectId !== id)
    setSelectIds(filteredIds)
  }

  return (
    <footer className={styles.footer_main}>
      <div className={styles.social}>
        <Link
          href="https://github.com/fullstackstef"
          target="_blank"
          onMouseEnter={() => handleHoverIn(1)}
          onMouseLeave={() => handleHoverOut(1)}
        >
          <Github
            width={40}
            height={40}
            color={selectIds.includes(1) ? '#82AAFF' : '#FFFFFF'}
            className={styles.icon}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/stefan-trivuncic-92034293/"
          target="_blank"
          onMouseEnter={() => handleHoverIn(2)}
          onMouseLeave={() => handleHoverOut(2)}
        >
          <LinkedIn
            width={40}
            height={40}
            color={selectIds.includes(2) ? '#82AAFF' : '#FFFFFF'}
            className={styles.icon}
          />
        </Link>
        <Link
          href="https://twitter.com/steftriv"
          target="_blank"
          onMouseEnter={() => handleHoverIn(3)}
          onMouseLeave={() => handleHoverOut(3)}
        >
          <Twitter
            width={40}
            height={40}
            color={selectIds.includes(3) ? '#82AAFF' : '#FFFFFF'}
            className={styles.icon}
          />
        </Link>
      </div>
      <p className={`${robMono.className} ${styles.text}`}>
        Designed and Built by Stefan Trivuncic
      </p>
    </footer>
  )
}

export default Footer
