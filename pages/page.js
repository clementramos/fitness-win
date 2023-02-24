'use client';

import Link from 'next/link';

import Auth from '../components/Auth';
import { useAuth, VIEWS } from '../components/AuthProvider';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Chargement...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <div className="card">
        <h2>Bonjour !</h2>
        <code className="highlight">{user.role}</code>
        <Link className="button" href="/profile">
          Allez à votre profil
        </Link>
        <button type="button" className="button-inverse" onClick={signOut}>
          Se déconnecter
        </button>
      </div>
    );
  }

  return <Auth view={view} />;
}