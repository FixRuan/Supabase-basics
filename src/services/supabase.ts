import axios from "axios";

const SUPABASE_API = process.env.SUPABASE_API;

const supabase = axios.create({
  baseURL: "https://mpyrbxvkxkbdoqdlfehj.supabase.co/rest/v1",
  headers: {
    apiKey: SUPABASE_API
  }
});

export { supabase };
