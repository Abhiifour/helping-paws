import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ypqetmolacmcjkwsijjn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwcWV0bW9sYWNtY2prd3NpampuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4ODczMDcsImV4cCI6MjA1ODQ2MzMwN30.zN6YE13A11eXRkXKVUdg8cbnhLLEZFsQ7JZFViaF6ps"
);

export const signup = async ({ name, email, password }) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    return data;
  } catch (e) {}
};

export const login = async ({ email, password }) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    return data;
  } catch (e) {}
};


export const GoogleSignIn = async () => {
  
  const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    
    if (error) {
      console.error('Error signing in with Google:', error.message);
    } else {
      console.log('Signed in as:', user);
      return user;
    }
};


