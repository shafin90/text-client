import React from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri'

const SendMessage = () => {
    return (
        <div className=' flex justify-center items-center w-full'>
            <input type="text" className="rounded-md p-2 border w-8/12 border-gray-300 focus:outline-none" placeholder="Enter your message..." />
            <RiSendPlane2Fill className=' text-2xl ms-2 cursor-pointer'></RiSendPlane2Fill>
        </div>
    );
};

export default SendMessage;