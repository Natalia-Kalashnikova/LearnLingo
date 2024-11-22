import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, googleAuthProvider } from "../../services/firebase.js";

export const Auth = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
        setUser(maybeUser);
      } else {
        signInWithPopup(auth, googleAuthProvider)
          .then(credentials => setUser(credentials.user))
          .catch((e) => console.error(e));
      }
      setLoading(false); 
    });

    return () => unsub();
  }, [auth]);

  if (loading) {
    return <>loading</>;
  }

  return user !== null ? <>{user.displayName}</> : <>loading</>;
};