// This component contains profile picture and a menu-bar
import {GiHamburgerMenu} from 'react-icons/gi'

const ProfileAndMenu = () => {
    return (
        <div className=' flex justify-between items-center w-full h-16 px-10'>
            <img src="" alt="profile" className="rounded-full border-2 border-black w-9 h-9"  />
            <GiHamburgerMenu className=' cursor-pointer text-2xl'></GiHamburgerMenu>
        </div>
    );
};

export default ProfileAndMenu;