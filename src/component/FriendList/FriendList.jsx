// This component contains the list of friend.

import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const FriendList = () => {
    const { userCollection, setTo } = useContext(authContext); // getting all user's information from authprovider through context API

    //Declaring state 
    const [screenWidth, setScreenWidth] = useState(screen.width);

    const navigate = useNavigate();

    return (
        <div className=" w-full h-5/6 overflow-y-scroll mt-8">
            <ul className=" ps-8">
                {
                    userCollection.map(e => <li
                        
                        key={e._id}
                        onClick={event => {
                            setTo(e)
                            if(screenWidth<576){
                                navigate('/chat')
                            }
                        }}
                        className=" ps-4 cursor-pointer hover:bg-slate-400 transition-all bg-slate-300 w-11/12 h-14 border-b-2 border-gray-800 flex justify-start items-center">
                        <img className=" w-8 h-8 rounded-full border-black me-4" src={e.img} alt="" />
                        <p>{e.name}</p>

                    </li>)
                }
            </ul>

        </div>
    );
};

export default FriendList;