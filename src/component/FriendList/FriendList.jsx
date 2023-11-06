// This component contains the list of friend.

import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const FriendList = () => {
    const {setUserCollection, userCollection, setTo, searchInput } = useContext(authContext); // getting all user's information from authprovider through context API

    //Declaring state 
    const [screenWidth, setScreenWidth] = useState(screen.width);
    const [temporaryList, setTemporaryList] = useState([])
    

    const navigate = useNavigate();


    useEffect(() => {
        if (searchInput !== null) {
            // setCopyOfUserCollection( userCollection)
            const filteredUser = userCollection.filter(e => e.number === searchInput);
            setTemporaryList(filteredUser)           
        }        
    }, [userCollection, setUserCollection, searchInput])

    return (
        <div className=" w-full h-5/6 overflow-y-scroll mt-8">
            <ul className=" ps-8">
                {
                    searchInput.length !== 0 ?
                    temporaryList.map(e => <li
                        
                        key={e._id}
                        onClick={event => {
                            setTo(e)
                            if(screenWidth<778){
                                navigate('/chat')
                            }
                        }}
                        className=" ps-4 cursor-pointer hover:bg-slate-400 transition-all bg-slate-300 w-11/12 h-14 border-b-2 border-gray-800 flex justify-start items-center">
                        <img className=" w-8 h-8 rounded-full border-black me-4" src={e.img} alt="" />
                        <p>{e.name}</p>

                    </li>)

                    :

                    userCollection.map(e => <li
                        
                        key={e._id}
                        onClick={event => {
                            setTo(e)
                            if(screenWidth<778){
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