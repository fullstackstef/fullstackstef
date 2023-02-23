import Link from 'next/link'
import Image from 'next/image'
import styles from 'src/components/about/About.module.css'

import Section from '@/components/section/Section'

const About = () => {
  return (
    <Section title="About Me" idValue="about">
      <div className={styles.section_left}>
        <p>
          My name is Stefan and I enjoy building web applications and sharing my
          knowledge on the web.
        </p>
        <p>
          During my time in university studying criminology & business law, I
          worked as an assistant to a university software engineering professor
          at a private school teaching STEM and this is where my love for
          software development began.
        </p>
        <p>
          While eventually directing the coding program at the private school
          and deferring going to law school once graduating from my
          undergraduate, I decided to take the plunge and become a self-taught
          software developer, mainly focusing on building full stack web
          applications.
        </p>
        <p>
          From that moment onwards, I’ve been fortunate to work at companies{' '}
          <Link
            className={styles.highlight}
            href="https://www.wearedetour.com/"
            target="_blank"
          >
            specializing in UX
          </Link>
          ,{' '}
          <Link
            className={styles.highlight}
            href="https://lets-warp.com/"
            target="_blank"
          >
            aerospace
          </Link>
          ,{' '}
          <Link
            className={styles.highlight}
            href="https://www.brainstation.io/"
            target="_blank"
          >
            education
          </Link>
          ,{' '}
          <Link
            className={styles.highlight}
            href="https://planned.com/"
            target="_blank"
          >
            event planning
          </Link>
          , and{' '}
          <Link
            className={styles.highlight}
            href="https://www.blockrenovation.com/"
            target="_blank"
          >
            home renovations
          </Link>
          . Here is my current stack that I have been working with:
        </p>
        <Image
          src="/images/techstack.png"
          alt="List of technologies that Stefan Trivuncic uses"
          width={470}
          height={72}
          className={styles.techStack}
        />
      </div>
      <Image
        src="/images/stefantrivuncic.png"
        alt="Portrait of Stefan Trivuncic"
        width={200}
        height={200}
        className={styles.portrait}
      />
    </Section>
  )
}

export default About
