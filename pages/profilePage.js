"use client";
import { supabase } from "./../utils/supabase";
import Link from "next/link";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import { useAuth } from "./Auth";
import Image from "next/image";

function Home({ cours }) {
  const { currentUser } = useAuth();
  return (
    <>
      <Navbar />
      <div className="card sm:pt-20 pt-48 pb-24 h-full flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center sm:px-20">
        <div className="column w-1/2 items-center gap-8 rounded-2xl bg-white py-8 px-4 shadow-md pt-8 sm:min-w-[60rem] sm:px-10">
          <h2 className="pb-4 text-4xl text-center font-black sm:px-5 sm:text-center sm:text-xl">
            Bonjour !
          </h2>
          <p className="rounded-lg bg-gray-100 p-2 font-mono">
            {currentUser.displayName}
          </p>
          <Image
            src={currentUser.photo /*URL*/}
            alt="photo de profil"
            width={150}
            height={150}
          />
          <p className="pb-4 text-xl text-center font-black sm:px-5 sm:text-center sm:text-xl">
            Voici vos cours disponibles / achetés :
          </p>
          <div className="h-fit ">
            <p className="pt-5 pb-5 mx-auto px-2 grid grid-cols-2 grid-row-2 gap-4">
              {cours.map((detail) => (
                <Link
                  key={detail.id}
                  href={`/${detail.id}`}
                  className="p-8 h-10 w-full rounded shadow text-xl hover:bg-gray-200 font-bold flex items-center justify-center"
                >
                  {detail.title}
                </Link>
              ))}
            </p>
          </div>
          <div className="text-center pt-10">
            <button
              type="button"
              className="rounded-full border-2 border-orange-400 bg-white px-8 py-2 font-bold text-orange-400 hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  let { data } = await supabase.from("cours").select("*");

  return {
    props: {
      cours: data,
    },
  };
}

export default Home;
