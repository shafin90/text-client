// WElcomg page of the app. 
// "Text" will arise when the app is open

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    // Position of "Text"
    const [textPos, setTextPos] = useState(600);
    const [isHidden, setIsHidden] = useState(false)

    // declaring useNavigate hook
    const navigate = useNavigate();

    // style for text
    const style = {
        top: textPos,
        transition:'1s'
    }
    
    // show "text" after 0.4s
    setTimeout(()=>{
        setTextPos(0)
    },300)

    // redirecting to app page
    setTimeout(()=>{
        setIsHidden(true)
    },1800)



    return (
        <div style={{zIndex:1}} className={isHidden?"hidden":" absolute bg-slate-300 w-full h-screen flex justify-center items-center overflow-hidden"}>
            <h1 style={style} className=" text-slate-950 text-6xl relative  font-bold">Text</h1>
        </div>
    );
};

export default WelcomePage;