// Central state management bplace for this web application using context API
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const authContext = createContext(); // Creating context

const AuthProvider = ({ children }) => {
    // State declaration============================================================================
    const [userinfo, setUserInfo] = useState(null); // user information
    const [email, setEmail] = useState(''); // user's email
    const [password, setPassword] = useState(''); // user's given password
    const [confirmPassword, setConfirmPassword] = useState(''); // user's given confirm password
    const [img, setImg] = useState(''); // user's profile image
    const [name, setName] = useState(''); // user's name
    const [number, setNumber] = useState(null); // user's phone number
    const [loggedInUserInfo, setLoggedInUserInfo] = useState(null) // store loggedInUser's informartion
    const [userCollection, setUserCollection] = useState([]) // collection of all user's

    // Data fetching,filtering==================================================================================================

    // set loggedIn user information.
    useEffect(() => {
        // fetching
        fetch('http://localhost:5000/userInfo')
            .then(res => res.json())
            .then(data => setUserCollection(data))
    }, [])

    useEffect(() => {
        // Finding the loggedIn user's information
        const loggedInUser = userCollection.find(e => e.email == userinfo?.email); // filtering data
        setLoggedInUserInfo(loggedInUser); // Set the loggedIn user's information
        console.log(loggedInUser)
    }, [userCollection, setUserCollection, userinfo, setUserInfo])


    console.log(userinfo)

    // Function declaration=============================================================================================

    // handle login functionality
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUserInfo(user);
                
            })
            .catch((error) => {
                console.log('something is wrong. try again')
            });

    };

    // handle google sign in functionality
    const handleGoogle = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUserInfo(user);
               
            }).catch((error) => {
                console.log("something wrong. Try again.")
            });
    }

    // Handle create account/registration functionality
    const handleRegistration = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUserInfo(user);
                
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password, img, number })
                })
            })
            .catch((error) => {
                console.log("something is wrong, try again")
            });
    }



    // Handle logout functionality
    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('logout done');
            setUserInfo(null);
        
        }).catch((error) => {
            console.log('logout cancel');
        });

    }
    // ====================================================================================================================

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user);
            }
        });
        return () => {
            unsubscribe();
        }
    }, []);


    // Passing data to different different component===================================================================
    const passedValue = {
        setName,
        setNumber,
        setImg,
        setConfirmPassword,
        setEmail,
        setPassword,
        handleLogin,
        handleGoogle,
        handleRegistration,
        handleLogOut,
        userinfo,
        userCollection
    }

    return (
        <authContext.Provider value={passedValue}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;