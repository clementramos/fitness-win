import { AuthProvider } from '../components/AuthProvider';
import createClient from '../lib/supabase-server';
import { useState, useEffect } from 'react';

export const revalidate = 0;

export default function RootLayout({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function getSessionData() {
      const supabase = createClient();
      const { data } = await supabase.auth.getSession();
      setSession(data?.session);
    }
    getSessionData();
  }, []);

  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <main className="flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center sm:px-20">
            <h1 className="mb-12 text-5xl font-bold sm:text-6xl">
              Accès personnalisé à votre <span className="font-black text-green-400">santé</span>
            </h1>
            <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
          </main>
        </div>
      </body>
    </html>
  );
}