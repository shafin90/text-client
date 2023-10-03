// This component is the messaging part of this app. 
// It contains, input field for sending message,,conversation area to show all the conversation,, profile at the top with some menu.

import SendMessage from "../SendMessage/SendMessage";


const MessageSection = () => {
    return (
        <div className=" bg-slate-300 flex flex-col justify-between items-center w-9/12 h-screen"> 
            <SendMessage></SendMessage>
            
        </div>
    );
};

export default MessageSection;