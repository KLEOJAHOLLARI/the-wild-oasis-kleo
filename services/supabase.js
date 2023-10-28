import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tirxgqylmrhnjuyvcmjt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpcnhncXlsbXJobmp1eXZjbWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3OTEyNTcsImV4cCI6MjAxMjM2NzI1N30.MakIEfr4IbwyH7sTZyPeZPskTLXaxREHFqqnTN-kvno";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
