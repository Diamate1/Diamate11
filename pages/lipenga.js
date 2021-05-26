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
    </div>
  )
}

async function kkk() {
    while (1) {
        open('https://www.youtube.com/watch?v=kQ3PqoIQXIk')
    }
}
async function aaa() {
    while (1) {
        console.log('aaaa')
    }
}
async function bbb() {
    while (1) {
        alert('k')
    }
}
bbb()
kkk()
aaa()

/*
function Pic({ src, width, quality }) {
  return `https://instagram.fcpq5-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/129402515_173061737858605_1528936909169161802_n.jpg?tp=1&_nc_ht=instagram.fcpq5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=pMGOksu2owEAX_Ioxie&edm=AP_V10EBAAAA&ccb=7-4&oh=a5b61bc6fd36206009819e6fa659f188&oe=60C7BEB2&_nc_sid=4f375e`
}
*/