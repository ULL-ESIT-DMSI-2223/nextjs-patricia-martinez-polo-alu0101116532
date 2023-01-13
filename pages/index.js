import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

function Home() {

  return (
    <div>
      <Head>
        <title>Hola!!</title>
        <link rel="icon" href="/api.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" alt="" width="100%" height="100%" className={styles.icon} />
        <Link href="/pet">Genera un nombre de mascota</Link>
        <br></br>
        <img src="/imagen.png" className={styles.icon} />
        <Link href="/image">Genera una imágen</Link>
        <br></br>
        <Link href="/404">Error 404</Link>
      </main>
    </div>
  )
}

export default Home