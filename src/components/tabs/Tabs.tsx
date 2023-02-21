import { Roboto_Mono } from '@next/font/google'

import styles from '@/components/Tabs/Tabs.module.css'
import { ITab } from '@/components/tabs/Tabs.const'

const robMono = Roboto_Mono({ subsets: ['latin'], weight: '500' })

interface Props {
  handleTabClick: (id: number) => void
  selectedTabId: number
  tabs: ITab[]
}

const Tabs = ({ handleTabClick, selectedTabId, tabs }: Props) => {
  return (
    <div className={styles.wrapper}>
      {!!tabs &&
        tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${styles.tab} ${robMono.className} ${
              selectedTabId === tab.id && styles.selected
            }`}
          >
            {tab.label}
          </button>
        ))}
    </div>
  )
}

export default Tabs
