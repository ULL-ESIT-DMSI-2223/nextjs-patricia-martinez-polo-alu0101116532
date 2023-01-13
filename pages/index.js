import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

function Home() {

  return (
    <div>
      <Head>
        <title>Hola! Soy un generador</title>
        <link rel="icon" href="/api.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <Link href="/pet">Genera un nombre de mascota</Link>
        <br></br>
        <img src="/imagen.png" className={styles.icon} />
        <Link href="/image">Genera una imagen</Link>
        <br></br>
        <img src="/error.png" className={styles.icon} />
        <Link href="/404">Error 404</Link>
      </main>
    </div>
  )
}

export default Home