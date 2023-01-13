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
        <img src="/dog.png" alt="" width="200%" height="200%" className={styles.icon} />
        <Link href="/pet">Genera un nombre de mascota</Link>
        <br></br>
        <img src="/imagen.png" alt="" width="200%" height="200%" className={styles.icon} />
        <Link href="/image">Genera una imagen</Link>
        <br></br>
        <Link href="/404">Error 404</Link>
      </main>
    </div>
  )
}

export default Home