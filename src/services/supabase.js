import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kyjkvmtqkfvbenttjrma.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5amt2bXRxa2Z2YmVudHRqcm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwMTkyNTksImV4cCI6MjAzNjU5NTI1OX0.V7wE07QllKOgophn69YVdZj1QW-W13FZsgV8DEt-k3A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
