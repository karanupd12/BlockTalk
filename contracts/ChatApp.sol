// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract ChatApp{
    
    //Structures
    struct user{
        string name;
        friend[] friendList;
    }
    
    struct friend{
        address pubkey;
        string name;
    }

    struct message{
        address sender;
        uint256 timestamp;
        string msg;
    }

    struct AllUserStruck{
        string name;
        address accountAddress;
    }
    AllUserStruck[] getAllUsers;                   


    mapping(address => user) userList;                    //all users
    mapping(bytes32 => message[]) allMessages;            //all messages


    //Check user exist or not
    function checkUserExists(address pubkey) public view returns(bool){
        return bytes(userList[pubkey].name).length > 0;
    }


    //CREATE ACCOUNT
    function createAccount(string calldata name) external {
        require(checkUserExists(msg.sender) == false, "User already exists");        //check1 :  does user already exists?
        require(bytes(name).length>0, "Username caannot be empty");                  //check2 : empty username?
        userList[msg.sender].name = name;                                            //add new user to userlist
        getAllUsers.push(AllUserStruck(name, msg.sender));                           //add new user to alluserstruck
    }


    //Get Username
    function getUsername(address pubkey) external view returns(string memory){
        require(checkUserExists(pubkey), "User is not registered");
        return userList[pubkey].name;
    }


    //ADD FRIENDS
    // Add Friends (uses 2 helper functions for checks and updates)
    function addFriend(address friend_key, string calldata name) external{  
        require(checkUserExists(msg.sender), "Create an account first");                       //check1 : sender exist?
        require(checkUserExists(friend_key), "User is not registered");                        //check2 : user exist?
        require(msg.sender != friend_key, "User can not add themselves as friends");           //check3 : adding yourself as your friend?
        require(checkAlreadyFriends(msg.sender, friend_key) == false, "These users are already friends");          //check4 : already friends?
        _addFriend(msg.sender, friend_key, name);                                              //update user friendlist
        _addFriend(friend_key, msg.sender, userList[msg.sender].name);                         //update sender friendlist
    }
    //helper1 : checkAlreadyFriends
    function checkAlreadyFriends(address pubkey1, address pubkey2) internal view returns(bool){
        if (userList[pubkey1].friendList.length > userList[pubkey2].friendList.length){
            address temp = pubkey1;
            pubkey1 = pubkey2;
            pubkey2 = temp;
        }
        for (uint256 i = 0; i< userList[pubkey1].friendList.length; i++){
            if (userList[pubkey1].friendList[i].pubkey == pubkey2) return true;
        }
        return false;
    }
    //helper2 : update your friendList when someone becomes your friend
    function _addFriend(address me, address friend_key, string memory name) internal{
        friend memory newFriend = friend(friend_key, name);
        userList[me].friendList.push(newFriend);
    }


    //GET MY FRIENDS
    function getMyFriendList() external view returns(friend[] memory){
        return userList[msg.sender].friendList;
    }


    //GET ALL USERS (all users registered in the app)
    function getAllAppUser() public view returns (AllUserStruck[] memory){
        return getAllUsers;
    }


    //get chat code
    function _getChatCode(address pubkey1, address pubkey2) internal pure returns(bytes32){
        if(pubkey1 < pubkey2){
            return keccak256(abi.encodePacked(pubkey1, pubkey2));
        } else return keccak256(abi.encodePacked(pubkey2, pubkey1));
    }
    //SEND MESSAGE
    function sendMessage(address friend_key, string calldata _msg) external{
        require(checkUserExists(msg.sender), "Create an account first");                //check1 : sender exists?
        require(checkUserExists(friend_key), "User is not registered");                 //check2 : friend exists?
        require(checkAlreadyFriends(msg.sender, friend_key), "You are not friend with the given user");      //check3 : are the friends?
        bytes32 chatCode = _getChatCode(msg.sender, friend_key);                        //store encoded msg in chatcode
        message memory newMsg = message(msg.sender, block.timestamp, _msg);             //create newMsg that has sender , time of sending, and msg
        allMessages[chatCode].push(newMsg);                                             //put msg in all meassages
    }
    //READ MESSAGE
    function readMessage(address friend_key) external view returns(message[] memory){
        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        return allMessages[chatCode];
    }
    
}