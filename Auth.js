import { createContext, useEffect, useState, useContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebaseConfig";
import Hero from "components/Hero";
import { useRouter } from "next/router";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let router = useRouter()
  
  useEffect(() => {
    const auth = getAuth(app);
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        console.error("no user");
        setCurrentUser(null);
        setLoading(false);
        return;
      }
      const token = await user.getIdToken();
      setCurrentUser(user);
      setLoading(false);
      console.log("token", token);
      console.log("user", user);
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      router.push('')
    }
  }, [currentUser]);

  if (!loading) {
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
  return <div>Loading......</div>
};
{/*
  if (!currentUser) {
    return <Hero />;
  } else {
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
};*/}

export const useAuth = () => useContext(AuthContext);
