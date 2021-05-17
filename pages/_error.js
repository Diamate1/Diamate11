import Image from 'next/image'
import styles from '../styles/Error.module.css'
import Head from 'next/head'
import Link from 'next/link'



export default function Error({ statusCode }) {
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
                
                    <div className={styles.profileDescCont}>
                        <div className={styles.Desc}>
                            <div className={styles.Title}>
                            Erro!
                            </div>
                            
                            <div className={styles.DescBDC}>
                                <div className={styles.DescBD}>
                                  Ocorreu um erro {statusCode}!
                                </div>
                            </div>
                        </div>

                        <div className={styles.Contato}>
                            <Link href="/">
                                <a className={styles.ContactImgLK}>
                                    <img 
                                    src="/static/images/casa.svg"
                                    className={styles.ContactImg}
                                    />
                                </a>
                            </Link>

                            <Link href="/">
                                <a className={styles.ContactImgLK}>
                                    Home
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
  
Error.getInitialProps = ({ res, err }) => {
const statusCode = res ? res.statusCode : err ? err.statusCode : 404
return { statusCode }
}