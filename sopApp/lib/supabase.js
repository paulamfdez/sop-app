import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

const SUPABASE_URL = 'https://tprbfwnrkqiebhiereai.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwcmJmd25ya3FpZWJoaWVyZWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NDk3MDUsImV4cCI6MjA3MTAyNTcwNX0.LeC8zLgMLW3vv_yVVeQHagnGaDe1kjyf10j2pBc08hE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
