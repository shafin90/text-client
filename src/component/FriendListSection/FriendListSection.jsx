// This component contains the friend list, an input field to search friend, user profile and logout option.

import SearchBar from "../SearchBar/SearchBar";

const FriendListSection = () => {
    return (
        <div className=" w-3/12 bg-gray-800 h-screen">
            <SearchBar></SearchBar>
            
        </div>
    );
};

export default FriendListSection;