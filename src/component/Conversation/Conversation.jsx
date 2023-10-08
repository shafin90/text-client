import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Conversation = () => {
    const { loggedInUserInfo,to, messagesToMe } = useContext(authContext); // retrieveing all the conversation
    
    return (
        <div className={to==null?' hidden':" w-full h-full px-14 overflow-y-scroll py-11"}>
            {
                messagesToMe.map(e=><div
                className={e?.to == loggedInUserInfo?.email?'flex justify-start items-center':'flex justify-end items-center'}
                
                    ><p className={e?.to == loggedInUserInfo?.email?" mb-3 px-3 py-1 text-sm bg-slate-100  text-gray-800 rounded-full inline-block ":" mb-3 px-3 py-1 text-sm bg-gray-800 text-slate-300 rounded-full inline-block "} >{e?.message}</p></div>)
            }
        </div>
    );
};

export default Conversation;