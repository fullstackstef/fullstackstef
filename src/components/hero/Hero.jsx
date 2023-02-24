import { Roboto_Mono } from '@next/font/google'
import { Inter } from '@next/font/google'
import Link from 'next/link'

import styles from 'src/components/hero/Hero.module.css'

const robMono = Roboto_Mono({ subsets: ['latin'], weight: '500' })
const inter = Inter({ subsets: ['latin'], weight: '700' })

const Hero = () => {
  return (
    <section>
      <p className={`${styles.intro} ${robMono.className}`}>
        Hey there! My name is
      </p>
      <h1 className={`${styles.intro_title} ${inter.className}`}>
        Stefan Trivuncic (aka fullstackstef).
      </h1>
      <h2 className={styles.intro_title}>I build & share things on the web.</h2>
      <p className={styles.intro_subtitle}>
        I’m a senior software developer who specializes in front end
        development, DX, and accessibility. While I’m in the process of looking
        for my next company, I’m focused on building my startup at{' '}
        <Link
          className={styles.highlight}
          href="https://flipkall.com"
          target="_blank"
        >
          Flipkall.
        </Link>
      </p>
    </section>
  )
}

export default Hero
