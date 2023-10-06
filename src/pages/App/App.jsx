// This page contains friendlist, messaging part and all other thing of this app.

import { useContext } from "react";
import FriendListSection from "../../component/FriendListSection/FriendListSection";
import MessageSection from "../../component/MessageSection/MessageSection";
import { authContext } from "../../component/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const App = () => {
    const { userinfo } = useContext(authContext);

    // Initialize useNavigation Hook
    const navigate = useNavigate();

    // Redirecting the user o the login page when user information is missing
    if (userinfo==null) {
        navigate('/login');
    }
    
    return (
        <div className=" flex justify-between items-center">
            <FriendListSection></FriendListSection>
            <MessageSection></MessageSection>

        </div>
    );
};

export default App;