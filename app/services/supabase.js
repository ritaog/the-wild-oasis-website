import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iietpghyosmxhozvscfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZXRwZ2h5b3NteGhvenZzY2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2NTY1NjYsImV4cCI6MjA4MzIzMjU2Nn0.5Z031YyLKW9GHGAgtoOMv7PZxnQvTg-BFa34DzDpEig";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
