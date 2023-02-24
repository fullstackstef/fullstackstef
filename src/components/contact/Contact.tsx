import { Roboto_Mono } from '@next/font/google'
import { Inter } from '@next/font/google'
import Link from 'next/link'

import styles from '@/components/contact/Contact.module.css'

const robMono = Roboto_Mono({ subsets: ['latin'], weight: '500' })
const inter = Inter({ subsets: ['latin'], weight: '700' })

const Contact = () => {
  return (
    <section className={styles.wrapper} id="contact">
      <h2 className={inter.className}>Contact Me</h2>
      <div className={styles.inner_wrapper}>
        <div className={styles.circle}></div>
        <p className={`${styles.status} ${robMono.className}`}>
          Currently looking for a new position
        </p>
      </div>
      <div className={styles.inner_wrapper}>
        <p className={styles.text}>
          Feel free to reach out if you or someone you know is hiring a senior
          software developer!
        </p>
      </div>
      <div className={styles.inner_wrapper}>
        <Link
          href="mailto:fullstackstef@gmail.com"
          className={`${styles.contact_btn} ${robMono.className}`}
        >
          Say Hello
        </Link>
      </div>
    </section>
  )
}

export default Contact
