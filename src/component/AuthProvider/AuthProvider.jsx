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
    const [to, setTo] = useState(null)// to whom user send message
    const [messages, setMessages] = useState([]) // All conversation and messages
    const [counter, setCounter] = useState(true)// It containes a boolean value. This will change over the time and keep the message state update tiem to time
    const [messagesToMe, setMessagesToMe] = useState([]) // All the messages that has been send to me
    const [sendToBottom, setSendToBottom] = useState([false])// contains boolean value. When user send a message, it bacomes true. after 2 sec, it becoms, false. when user send message, then the whole div jump to the bottom so that last message can be seen.


    // making sendToBottom false as it is true now
    if(setSendToBottom){
        setTimeout(()=>{
            setSendToBottom(false)
        },1200)
    }




    // Data fetching,filtering==================================================================================================

    // fetching all user collection
    useEffect(() => {
        // fetching
        fetch('https://text-server-eyop.vercel.app/userInfo')
            .then(res => res.json())
            .then(data => setUserCollection(data))
    }, [userCollection])


    // Finding the loggedIn user's information
    useEffect(() => {
        const loggedInUser = userCollection.find(e => e.email == userinfo?.email); // filtering data
        setLoggedInUserInfo(loggedInUser); // Set the loggedIn user's information
    }, [userCollection, setUserCollection, userinfo, setUserInfo])

    // changing the value of counter over the time to update the messages state
    setTimeout(() => {
        setCounter(!counter);
    }, 300)

    // Fetching all the converation
    useEffect(() => {
        fetch("https://text-server-eyop.vercel.app/allMessages")
            .then(res => res.json())
            .then(data => setMessages(data))
    }, [counter])

    // Filtering all the messages that has been send to me
    useEffect(() => {
        const filteredMessage = messages.filter(e => (e?.from == loggedInUserInfo?.email || e?.from == to?.email) && (e?.to == loggedInUserInfo?.email || e?.to == to?.email))
        setMessagesToMe(filteredMessage)
    }, [counter, loggedInUserInfo, messages, to])


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

                fetch('https://text-server-eyop.vercel.app/users', {
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
        userCollection,
        loggedInUserInfo,
        to,
        setTo,
        messages,
        messagesToMe,
        setSendToBottom,
        sendToBottom
    }

    return (
        <authContext.Provider value={passedValue}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;