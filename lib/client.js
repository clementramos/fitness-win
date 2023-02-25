import { createClient } from '@supabase/supabase-js'

export default function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and anon key must be provided')
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  return supabase
}