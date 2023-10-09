import { useContext, useEffect, useRef } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Conversation = () => {
    const { loggedInUserInfo, to, messagesToMe, sendToBottom } = useContext(authContext); // retrieveing all the conversation
    const conversationContainerRef = useRef(null);

    useEffect(() => {
        if (sendToBottom) {
            // Scroll to the bottom of the conversation container
            if (conversationContainerRef.current) {
                conversationContainerRef.current.scrollTop = conversationContainerRef.current.scrollHeight;
            }
        }
    }, [sendToBottom]);
    return (
        <div className={to == null ? ' hidden' : " w-full h-full px-14 overflow-y-scroll "} ref={conversationContainerRef}>
            {
                messagesToMe.map(e => <div
                    className={e?.to == loggedInUserInfo?.email ? 'flex justify-start items-center' : 'flex justify-end items-center'}

                ><p className={e?.to == loggedInUserInfo?.email ? " mb-3 px-3 py-1 text-sm bg-slate-100  text-gray-800 rounded-full inline-block " : " mb-3 px-3 py-1 text-sm bg-gray-800 text-slate-300 rounded-full inline-block "} >{e?.message}</p></div>)
            }
        </div>
    );
};

export default Conversation;