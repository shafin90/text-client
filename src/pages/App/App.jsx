// This page contains friendlist, messaging part and all other thing of this app.

import { useContext, useState } from "react";
import FriendListSection from "../../component/FriendListSection/FriendListSection";
import MessageSection from "../../component/MessageSection/MessageSection";
import { authContext } from "../../component/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const App = () => {
    const { userinfo } = useContext(authContext);

    // Declaring state
    const [screenWidth, setScreenWidth] = useState(screen.width)

    // Initialize useNavigation Hook
    const navigate = useNavigate();

    // Redirecting the user o the login page when user information is missing
    if (userinfo == null) {
        navigate('/login');
    }

    if (screenWidth < 778) {
        return (
            <FriendListSection></FriendListSection>
        )
    }
    else {
        return (
            <div className=" flex justify-between items-center">
                <FriendListSection></FriendListSection>
                <MessageSection></MessageSection>

            </div>
        );
    }
};

export default App;