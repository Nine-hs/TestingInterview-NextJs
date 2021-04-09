import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Products
        </h1>

        <div className={styles.grid}>
          <Link href="/product" >
            <a className={styles.card}>
              <h3>Product &rarr;</h3>
              <p>Deatil</p>
            </a>
          </Link>
          <Link href="/product" >
            <a className={styles.card}>
              <h3>Product &rarr;</h3>
              <p>Deatil</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
