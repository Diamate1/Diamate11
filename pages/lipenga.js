import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Projetinho Fellas</title>
      </Head>

      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <li className={styles.navLi}>Diamate1</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <div className={styles.mainAL}>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.divFoot}>
          <div>

          </div>

          <div className={styles.sep}>
            <hr className={styles.separarFooter} />
          </div>
        </div>
        
        <div className={styles.divFoot}>YLB MOB®</div>
        
        <div className={styles.divFoot}>
          <div className={styles.sep}>
            <hr className={styles.separarFooter} />
          </div>

          <div>

          </div>
        </div>
      </footer>
    
      <script src="/static/trava.js"></script>
    </div>
  )
}