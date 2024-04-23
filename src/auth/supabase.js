import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ldcmoegvkqeewzgbkehq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkY21vZWd2a3FlZXd6Z2JrZWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNzY3NzEsImV4cCI6MjAyODk1Mjc3MX0.7o4SKbWkWNndXbo1S-BCsKAP7DTzf58we-mn82mDnA0"
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
