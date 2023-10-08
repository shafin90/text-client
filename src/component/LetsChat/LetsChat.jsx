// This component contains a text "Lets chat". When user logged in his/her account , then he/she will ses the text until he/she choose someone to chat with 

import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const LetsChat = () => {
    const {to} = useContext(authContext); // receveing data to whom user send message

    return (
        <div className={to==null?" w-full h-full flex justify-center items-center":"hidden"}>
            <h1 className=" text-gray-900 font-extrabold text-6xl">Lets Chat</h1>
        </div>
    );
};

export default LetsChat;