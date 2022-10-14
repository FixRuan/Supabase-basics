import AsyncStorage from "@react-native-async-storage/async-storage";
import { setupURLPolyfill } from "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";

setupURLPolyfill();

const SERVICE_KEY = process.env.SERVICEC_KEY;
const SUPABASE_BASEURL = process.env.SUPABASE_BASEURL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export const supabase = createClient(SUPABASE_BASEURL, SUPABASE_KEY, {
  auth: {
    detectSessionInUrl: false,
    storage: AsyncStorage,
  },
});
