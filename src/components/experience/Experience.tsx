import { useState } from 'react'

import Section from '@/components/section/Section'

import Tabs from '@/components/tabs/Tabs'
import { tabInfo } from '@/components/tabs/Tabs.const'
import TabContent from '@/components/tabs/tabContent/TabContent'

import styles from '@/components/experience/Experience.module.css'

const Experience = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabInfo[0].id)

  const handleTabClick = (id: number) => {
    setSelectedTabId(id)
  }

  const tabsMenu = tabInfo.map((tab) => {
    return {
      id: tab.id,
      label: tab.company,
    }
  })

  return (
    <Section title="My Experience" idValue="experience">
      <div className={styles.section_left}>
        <Tabs
          handleTabClick={handleTabClick}
          selectedTabId={selectedTabId}
          tabs={tabsMenu}
        />
      </div>
      <div className={styles.section_right}>
        <TabContent experiences={tabInfo} selectedTabId={selectedTabId} />
      </div>
    </Section>
  )
}

export default Experience
