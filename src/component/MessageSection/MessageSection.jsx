// This component is the messaging part of this app. 
// It contains, input field for sending message,,conversation area to show all the conversation,, profile at the top with some menu.

import Conversation from "../Conversation/Conversation";
import ProfileAndMenu from "../ProfileAndMenu/ProfileAndMenu";
import SendMessage from "../SendMessage/SendMessage";
import LetsChat from "../LetsChat/LetsChat";
import { useState } from "react";


const MessageSection = () => {
    const [screenWidth, setScreenWidth] = useState(screen.width); // measure the screen's width
    
    return (
        <div style={{height:"100vh"}} className= {screenWidth>778?" bg-slate-300 flex flex-col justify-between items-center w-9/12 h-screen":" bg-slate-300 flex flex-col justify-between items-center w-screen h-screen"}>
            <ProfileAndMenu screenWidth={screenWidth} ></ProfileAndMenu>
            <Conversation></Conversation>
            <SendMessage></SendMessage>
            <LetsChat></LetsChat>


        </div>
    );
};

export default MessageSection;