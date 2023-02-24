import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Head from "next/head";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

export default function Home({}) {
  return (
    <>
    <Meta>
    </Meta>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap" rel="stylesheet" />
    </Head>
    <Navbar/>
    <Hero/>
    <Footer/>
      </>
  )
}
