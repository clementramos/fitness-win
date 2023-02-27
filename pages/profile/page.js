import Link from 'next/link';
import { redirect } from 'next/navigation';
import { requestAsyncStorage } from 'next/dist/server/utils'

import SignOut from '../../components/SignOut';
import createClient from '../../lib/supabase-server';

export default function Profile() {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const session = await requestAsyncStorage.getSession();

    if(!session.user) {
      redirect('/', { statusCode: 302 });
    }

    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      if(!data.user) {
        router.push('/');
      }
    }
    fetchUser();
  }, [fetchUser, router, supabase]);

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