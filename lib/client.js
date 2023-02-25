import { createClient } from "@supabase/supabase-js";

export const supabase = createClient (
    process.env.local.NEXT_PUBLIC_SUPABASE_URL,
    process.env.local.NEXT_PUBLIC_SUPABASE_ANON_KEY
)