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
          <div className={styles.card}>
            <div className={styles.profilePicName}>
              <div className={styles.profilePicNameAL}>
                <div className={styles.Pic}>
                  <div className={styles.PicAl}>
                    <Image 
                      src="/static/images/Pic.jpg"
                      width={500}
                      height={500}
                    />
                  </div>
                  
                </div>
                
                <div className={styles.Name}>
                  Young Mascka Nego
                </div>
              </div>
            </div>

            <div className={styles.sepCont}>
              <hr className={styles.separarCard} />
            </div>

            <div className={styles.profileDescCont}>
              <div className={styles.Desc}>
                <div className={styles.Title}>
                  Musicas
                </div>
                
                <div className={styles.DescBD}>
                  <audio controls autoplay>
                      <source src="static/audio/young mascka/young mascka - 7 palmos.mp3/" />
                  </audio>
                </div>
              </div>

              <div className={styles.Contato}>
                <Link href="https://twitter.com/diamate11">
                  <a target="_blank" className={styles.ContactImgLK}>
                    <img 
                      src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png"
                      className={styles.ContactImg}
                    />
                  </a>
                </Link>

                <Link href="https://twitch.tv/diamate11_pjl">
                  <a target="_blank" className={styles.ContactImgLK}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Twitch_Glitch_Logo_Purple.svg/878px-Twitch_Glitch_Logo_Purple.svg.png"
                      className={styles.ContactImg}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
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
/*
function Pic({ src, width, quality }) {
  return `https://instagram.fcpq5-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/129402515_173061737858605_1528936909169161802_n.jpg?tp=1&_nc_ht=instagram.fcpq5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=pMGOksu2owEAX_Ioxie&edm=AP_V10EBAAAA&ccb=7-4&oh=a5b61bc6fd36206009819e6fa659f188&oe=60C7BEB2&_nc_sid=4f375e`
}
*/