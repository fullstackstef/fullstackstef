import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto_Mono } from '@next/font/google'

import styles from '@/components/Tabs/TabContent/TabContent.module.css'

import { TabInfo } from '@/components/tabs/Tabs.const'

import ArrowRight from '@/components/icons/ArrowRight'

const robMono = Roboto_Mono({ subsets: ['latin'], weight: '400' })

interface Props {
  experiences: TabInfo[]
  selectedTabId: number
}

const TabContent = ({ experiences, selectedTabId }: Props) => {
  const selectedExperience = experiences.find(
    (company) => company.id === selectedTabId
  )

  const company = selectedExperience?.company
  const companyURL = selectedExperience?.companyUrl || ''
  return (
    <div className={`${styles.wrapper} ${robMono.className}`}>
      {selectedExperience?.positions.map((position, idx) => (
        <Fragment key={position.id}>
          <h3 className={styles.title}>
            {position.title}{' '}
            <Link href={companyURL} target="_blank" className={styles.link}>
              @ {company}
            </Link>
          </h3>
          <div className={styles.inner_wrapper}>
            <time dateTime={position.startDate}>{position.startDate}</time>
            <span className={styles.dash}>-</span>
            <time
              dateTime={
                position.current ? new Date().toISOString() : position.endDate
              }
            >
              {position.current ? 'Current' : position.endDate}
            </time>
          </div>
          <div className={styles.inner_wrapper}>
            <ul>
              {position.tasks.map((task) => (
                <li key={task} className={styles.task_item}>
                  <ArrowRight width={14} height={14} /> <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.inner_wrapper}>
            <Image
              src={position.techStackImg.src}
              alt={`${company} Tech Stack`}
              width={position.techStackImg.width}
              height={position.techStackImg.height}
            />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default TabContent
