import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { Timeline } from '../components/Timeline/Timeline'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Timeline />
      </main>
    </div>
  )
}

export default Home
