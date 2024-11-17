import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from 'firebase/auth';
import { setUser, removeUser } from "../redux/auth/auth.reducer.js";

export function useAuth() {
    const dispatch = useDispatch();
    const { name, email, id, token } = useSelector((state) => state.user);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser) {
                dispatch(
                    setUser({
                        name: maybeUser.displayName,
                        email: maybeUser.email,
                        id: maybeUser.uid,
                        token: maybeUser.accessToken,
                    })
                );
            } else {
                dispatch(removeUser());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(removeUser());
        })
            .catch((error) => {
                console.error('Error when logging out', error)
            });
    };

    return {
        isAuth: Boolean(name),
        name,
        email,
        id,
        token,
        logout,
    };
}