'use client';

import Link from 'next/link';
import Navbar from "/components/Navbar"
import Footer from "/components/Footer"

import Auth from '/components/Auth';
import { useAuth, VIEWS, } from '../components/AuthProvider';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loadingue...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <>
      <Navbar/>
      <div className="card sm:pt-20 h-screen flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center sm:px-20">
        <div className='column max-w-[55rem] items-center gap-8 rounded-2xl bg-white py-8 px-4 shadow-md pt-8 sm:min-w-[60rem] sm:px-10'>
          <h2 className="pb-4 text-4xl text-center font-black sm:px-5 sm:text-center sm:text-xl">Bonjour !</h2>
            <p className="rounded-lg bg-gray-100 p-2 font-mono">{user.email}</p>
            <Link className="pt-8 link w-full text-center block mb-2 font-medium text-black" href="/profile/page">
              <button className='rounded-full border-2 border-white bg-orange-400 px-8 py-2 font-bold text-white hover:border-orange-400 hover:bg-white hover:text-orange-400 focus:border-orange-400 focus:bg-white focus:text-orange-400'>
                Votre profil
              </button>
            </Link>
            <div className='text-center pt-10'>
              <button type="button" className="rounded-full border-2 border-orange-400 bg-white px-8 py-2 font-bold text-orange-400 hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white" onClick={signOut}>
              Se déconnecter
              </button>
            </div>
          </div>
      </div>
      <Footer/>
      </>
    );
  }

  return <Auth view={view} />;
}