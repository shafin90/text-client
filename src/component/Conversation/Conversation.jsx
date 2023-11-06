import { useContext, useEffect, useRef } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Conversation = ({screenWidth}) => {
    const { loggedInUserInfo, to, messagesToMe, sendToBottom, counter } = useContext(authContext); // retrieveing all the conversation
    const conversationContainerRef = useRef(null);

    useEffect(() => {
        if (sendToBottom) {
            conversationContainerRef.current.scrollTop = conversationContainerRef.current.scrollHeight;
        }
    }, [sendToBottom, counter]);
    return (
        <div style={{height:"80vh", paddingLeft:`${screenWidth<778&&"15px"}`,paddingRight:`${screenWidth<778&&"15px"}`}} className={to == null ? 'hidden' : "w-full h-full px-14 overflow-y-scroll bottom-0"} ref={conversationContainerRef}>
            {
                messagesToMe.map(e => <div
                    className={e?.to == loggedInUserInfo?.email ? 'flex justify-start items-center' : 'flex justify-end items-center'}

                ><p className={e?.to == loggedInUserInfo?.email ? " mb-3 px-3 py-1 text-sm bg-slate-100  text-gray-800 rounded-full inline-block " : " mb-3 px-3 py-1 text-sm bg-gray-800 text-slate-300 rounded-full inline-block "} >{e?.message}</p></div>)
            }
        </div>
    );
};

export default Conversation;