import { createClient } from "@supabase/supabase-js";


const SERVICE_KEY = process.env.SERVICEC_KEY;
const SUPABASE_BASEURL = process.env.SUPABASE_BASEURL;

export const supabase = createClient(SUPABASE_BASEURL, SERVICE_KEY);
