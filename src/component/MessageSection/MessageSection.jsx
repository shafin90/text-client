// This component is the messaging part of this app. 
// It contains, input field for sending message,,conversation area to show all the conversation,, profile at the top with some menu.

import Conversation from "../Conversation/Conversation";
import ProfileAndMenu from "../ProfileAndMenu/ProfileAndMenu";
import SendMessage from "../SendMessage/SendMessage";
import LetsChat from "../LetsChat/LetsChat";


const MessageSection = () => {
        return (
        <div className=" bg-slate-300 flex flex-col justify-between items-center w-9/12 h-screen">
            <ProfileAndMenu></ProfileAndMenu>
            <Conversation></Conversation>
            <SendMessage></SendMessage>
            <LetsChat></LetsChat>


        </div>
    );
};

export default MessageSection;