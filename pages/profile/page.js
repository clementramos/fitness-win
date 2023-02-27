import Link from 'next/link';
import { redirect } from 'next/navigation';
import { requestAsyncStorage } from 'next/dist/server/utils'

import SignOut from '../../components/SignOut';
import createClient from '../../lib/supabase-server';

export default function Profile({ user }) {
  return (
    <div className="card">
      <h2>Votre profil :</h2>
      <code className="highlight">{user.email}</code>
      <div className="heading">Dernière connexion le :</div>
      <code className="highlight">{new Date(user.last_sign_in_at).toUTCString()}</code>
      <Link className="button" href="/">
        Retour au site
      </Link>
      <SignOut />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = req.session;

  if (!session || !session.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
}
