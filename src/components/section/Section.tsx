import { ReactNode } from 'react'
import { Inter } from '@next/font/google'

import styles from 'src/components/section/Section.module.css'

const inter = Inter({ subsets: ['latin'], weight: '700' })

interface Props {
  title: string
  idValue: string
  children?: ReactNode
}

const Section = ({ title, idValue, children }: Props) => {
  const reverseColumn = idValue === 'about'
  return (
    <section id={idValue}>
      <div className={styles.wrapper}>
        <h2 className={`${styles.title} ${inter.className}`}>{title}</h2>
        <div
          className={`${styles.container} ${reverseColumn && styles.reverse}`}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
