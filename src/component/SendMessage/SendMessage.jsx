// This component contain input field to send message

import { useContext, useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri'
import { authContext } from '../AuthProvider/AuthProvider';

const SendMessage = () => {
    const { to, loggedInUserInfo } = useContext(authContext); // recieving data from authprovider through context API

    // state declaration
    const [text, setText] = useState('');

    const [currentTime, setCurrentTime] = useState(new Date());

    // send the message
    const sendMessage = () => {

        fetch('https://text-server-eyop.vercel.app/messages', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ from: loggedInUserInfo.email, to: to.email, message: text, time: `${currentTime.getHours}:${currentTime.getMinutes}` })
        })
            .then(res => res.json())
            .then(data => {
                setText('')

            })

        // setTimeout(()=>{

        // },1000)
    }

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }
    return (
        <div style={{ height: "20vh" }} className={to == null ? ' hidden' : 'flex justify-center items-center w-full  h-24'}>
            <input onKeyPress={handleKeyPress} onChange={e => setText(e.target.value)} type="text" value={text} placeholder="Enter your message" className="rounded-md py-2 px-4 border w-8/12 border-gray-300 focus:outline-none" />
            <RiSendPlane2Fill onClick={sendMessage} className=' text-3xl ms-2 cursor-pointer'></RiSendPlane2Fill>
        </div>
    );
};

export default SendMessage;