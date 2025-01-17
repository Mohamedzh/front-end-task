import Head from 'next/head'
import Dashboard from '../components/dashboard'
import Navbar from '../components/navbar'
import Table from '../components/table'
import { HomeType } from '../types'
import { getAllHomes } from '../lib/api'
import Footer from '../components/footer'

export default function Home({ homes }: { homes: HomeType[] }) {

  return (
    <div className='bg-[#F5F5F5] min-h-[100vh]'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Navbar />
        <div id='homeDiv' className='lg:mx-[109px] mx-5'>
          <Dashboard />
          <Table homes={homes} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await getAllHomes()
  return { props: { homes: res.data } }
}
