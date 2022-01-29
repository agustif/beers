import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beer Up!</title>
        <meta name="description" content="Create your next meetup invitation, beer calculations included" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">BEERUP</a>
        </h1>
        </main>
    </div>
  )
}

export default Home
