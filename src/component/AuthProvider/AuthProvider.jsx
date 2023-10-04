// Central state management bplace for this web application using context API
import { createContext, useState } from "react";

export const authContext = createContext(); // Creating context

const AuthProvider = ({ children }) => {
    // State declaration============================================================================
    const [email, setEmail] = useState(''); // user's email
    const [password, setPassword] = useState(''); // user's given password
    const [confirmPassword, setConfirmPassword] = useState(''); // user's given confirm password
    const [img, setImg] = useState(''); // user's profile image
    const [name, setName] = useState(''); // user's name
    const [number, setNumber] = useState(null); // user's phone number

    // Function declaration==========================================================================

    // handle login functionality
    const handleLogin = (e) => {
        e.preventDefault();
    };

    // handle google sign in functionality
    const handleGoogle = () => {

    }

    // Handle create account/registration functionality
    const handleRegistration = () => {

    }



    // Passing data to different different component=============================================================
    const passedValue = {
        setEmail,
        setPassword,
        handleLogin,
        handleGoogle,
        handleRegistration
    }

    return (
        <authContext.Provider value={passedValue}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;