// This component contain input field to send message

import { useContext, useEffect, useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri'
import { authContext } from '../AuthProvider/AuthProvider';
import { FaImage } from "react-icons/fa6";


const SendMessage = () => {
    const { to, loggedInUserInfo, counter } = useContext(authContext); // recieving data from authprovider through context API

    // state declaration
    const [text, setText] = useState('');
    const [img, setImg] = useState(null); // send image while texting

    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        setCurrentTime(new Date())
    }, [counter])


    // handle image uploading
    const handleImageUpload=(event)=>{
        setImg(
            URL.createObjectURL(event.target.files[0])
        );
    }

    // send the message
    const sendMessage = () => {

        fetch('https://text-server-eyop.vercel.app/messages', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({  from: loggedInUserInfo.email, to: to.email, message: text, time: `${currentTime.getHours()}:${currentTime.getMinutes()}`, img: img })
        })
            .then(res => res.json())
            .then(data => {
                setText('')
            })

            setImg(null)
    }

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }
    return (
        <div style={{ height: "20vh" }} className={to == null ? ' hidden' : 'flex justify-center items-center w-full  h-24'}>

            {/* upload image while texting */}
            <label htmlFor="fileInput" className="cursor-pointer">
                <FaImage className='me-4 text-2xl' />
            </label>
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
            />

            {/* write message to send */}
            <input onKeyPress={handleKeyPress} onChange={e => setText(e.target.value)} type="text" value={text} placeholder="Enter your message" className="rounded-md py-2 px-4 border w-8/12 border-gray-300 focus:outline-none" />

            {/* send button to send message */}
            <RiSendPlane2Fill onClick={sendMessage} className=' text-3xl ms-2 cursor-pointer'></RiSendPlane2Fill>
        </div>
    );
};

export default SendMessage;