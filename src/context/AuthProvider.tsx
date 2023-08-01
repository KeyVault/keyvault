import { createContext, useContext, useEffect, useState, ReactNode, Provider } from "react";
import { supabase } from "../supabase/client";
import { User } from "@supabase/supabase-js";


interface AuthContextProps {
  auth: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<any>; // Adjust the return type accordingly
  signOut: () => Promise<any>; // Adjust the return type accordingly
  passwordReset: (email: string) => Promise<any>; // Adjust the return type accordingly
  updatePassword: (updatedPassword: string) => Promise<any>; // Adjust the return type accordingly
  signInWithDiscord: () => Promise<any>;
  signInWithGoogle: () => Promise<any>;
  signInWithTwitter: () => Promise<any>;
  signInWithFacebook: () => Promise<any>;
  signInWithGithub: () => Promise<any>;
  signInWithNotion: () => Promise<any>;
  signInWithSlack: () => Promise<any>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

const login = (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });


const signOut = () => supabase.auth.signOut();

const passwordReset = (email: string) =>
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/update-password",
  });

const updatePassword = (updatedPassword: string) =>
  supabase.auth.updateUser({ password: updatedPassword });

const signInWithDiscord = () => supabase.auth.signInWithOAuth({ provider: "discord"});
const signInWithGoogle = () => supabase.auth.signInWithOAuth({ provider: "google"});
const signInWithTwitter = () => supabase.auth.signInWithOAuth({ provider: "twitter"});
const signInWithFacebook = () => supabase.auth.signInWithOAuth({ provider: "facebook"});
const signInWithGithub = () => supabase.auth.signInWithOAuth({ provider: "github"});
const signInWithNotion = () => supabase.auth.signInWithOAuth({ provider: "notion"});
const signInWithSlack = () => supabase.auth.signInWithOAuth({ provider: "slack"});


interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user ?? null);
      setAuth(user ? true : false);
      setLoading(false);
    };
    getUser();
    const { data } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "PASSWORD_RECOVERY") {
          setAuth(false);
        } else if (event === "SIGNED_IN") {
          setUser((prevUser) => session ? (session.user as User) : prevUser);
          setAuth(true);
        } else if (event === "SIGNED_OUT") {
          setAuth(false);
          setUser(null);
        }
      }
    );
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
        login,
        signOut,
        passwordReset,
        updatePassword,
        signInWithDiscord,
        signInWithGoogle,
        signInWithTwitter,
        signInWithFacebook,
        signInWithGithub,
        signInWithNotion,
        signInWithSlack
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
