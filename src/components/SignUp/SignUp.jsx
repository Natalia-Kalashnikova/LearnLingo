import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setUser } from '../../redux/auth/auth.reducer';
import UniversalForm from "../Forms/Form";
import { showErrorToast } from '../ErrorMessages/errorMessages';

const SignUp = () => {
    const dispatch = useDispatch();
    const signInInputs = [
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Password' },
    ];

    const handleRegisterSubmit = async ({name, email, password}) => {
        const auth = getAuth();
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, { displayName: name });
            dispatch(setUser({
                    name,
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
            title="Registration"
            text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
            inputs={signInInputs}
            handleUserSubmit={handleRegisterSubmit}
            button="Sign Up"
        />
    )
}

export default SignUp;