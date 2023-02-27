'use client';

import Link from 'next/link';
import Navbar from "/components/Navbar"
import Footer from "/components/Footer"

import Auth from '/components/Auth';
import { useAuth, VIEWS, } from '../components/AuthProvider';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <>
      <Navbar/>
      <div className="card pt-48 sm:pt-20 h-screen">
      <h2 className="pt-8 pb-4 text-4xl text-center font-black px-80 sm:px-5 sm:text-center sm:text-xl uppercase">bonjour !</h2>
        <p className="w-full pt-8 pb-4 text-2xl text-center font-thin px-80 sm:px-5 sm:text-center sm:text-xl">{user.email}</p>
        <Link className="pt-8 link w-full text-center text-4xl block mb-2 font-medium text-black" href="/profile/page">
          Allez à votre profil
        </Link>
        <div className='text-center pt-10'>
          <button type="button" className="button-inverse w-fit uppercase py-3 px-5 text-xl font-medium text-center text-black rounded-lg bg-red-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800" onClick={signOut}>
            Se déconnecter
          </button>
        </div>
      </div>
      <Footer/>
      </>
    );
  }

  return <Auth view={view} />;
}