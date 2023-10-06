// This component contains the friend list, an input field to search friend, user profile and logout option.

import FriendList from "../FriendList/FriendList";
import ProfileAndLogout from "../ProfileAndLogout/ProfileAndLogout";
import SearchBar from "../SearchBar/SearchBar";

const FriendListSection = () => {
    return (
        <div className=" w-3/12 bg-gray-800 h-screen flex flex-col justify-between items-center">
            <div className=" flex flex-col justify-start items-center w-full h-full">
                <SearchBar></SearchBar>
                <FriendList></FriendList>
            </div>
            <ProfileAndLogout></ProfileAndLogout>

        </div>
    );
};

export default FriendListSection;