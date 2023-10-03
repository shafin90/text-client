// This page contains friendlist, messaging part and all other thing of this app.

import FriendListSection from "../../component/FriendListSection/FriendListSection";
import MessageSection from "../../component/MessageSection/MessageSection";


const App = () => {
    return (
        <div className=" flex justify-between items-center">
            <FriendListSection></FriendListSection>
            <MessageSection></MessageSection>
            
        </div>
    );
};

export default App;