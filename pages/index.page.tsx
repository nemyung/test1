import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Page Extension Test
        </h1>
        <h2>
          about 디렉토리 구조..
        </h2>
        <Link href="about">about</Link>
      </main>
    </div>
  )
}

export default Home
