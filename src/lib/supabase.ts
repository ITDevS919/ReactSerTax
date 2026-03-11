import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key-for-development';

if (supabaseUrl === 'https://placeholder.supabase.co') {
  console.warn(
    'Supabase: Using placeholder config. Create a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY for real auth.'
  );
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
