import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import account from '../pages/account'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Account = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
    <Navbar />
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
          {!session ? (
              <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="default" />
          ) : (
              <account session={session} />
          )}
      </div>
      <Footer />
      </>
  )
}

export default Account