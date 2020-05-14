import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Hey
      </main>

      <footer>
        Built with <img src="/netliheart.svg" alt="Netlify Heart" /> for you
      </footer>
    </div>
  )
}
