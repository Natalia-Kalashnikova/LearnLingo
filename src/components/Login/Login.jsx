import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import UniversalForm from "../Forms/Form";
import { setUser } from '../../redux/auth/auth.reducer';
import { showErrorToast } from '../ErrorMessages/errorMessages';

const Login = () => {
    const dispatch = useDispatch();
    const loginInputs = [
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Password' },
    ];
    
    const handleLoginSubmit = async ({ email, password }) => {
        const auth = getAuth();
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            dispatch(setUser({
                    name: user.displayName,
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
        } catch (error) {
            showErrorToast(error.message);
        }
    };

    return (
        <UniversalForm
            title="Log In"
            text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            inputs={loginInputs}
            handleUserSubmit={handleLoginSubmit}
            button="Log In"
        />
    )
}

export default Login;