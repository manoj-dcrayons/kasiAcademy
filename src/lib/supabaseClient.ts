import { createClient } from '@supabase/supabase-js';

const supabaseUrl :string = 'https://aftnhhpnjuhsrzrhxvqn.supabase.co';
const supabaseAnonKey : string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdG5oaHBuanVoc3J6cmh4dnFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2Njk3ODMsImV4cCI6MjA3MzI0NTc4M30.rfkviqqeynyBZXkkA47_dv6la9xcsn30B7XBR0ZXd64';

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars are missing: VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');


