import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { checkIfWalletConnected, connectWallet, connectingWithContract } from '../utils/apiFeature';  //internal imports

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({ children }) => {
   //USESTATE
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendLists, setFriendLists] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    //CHAT USER DATA (data of the user currently chatting with)
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    //SETUP ROUTER
    const router = useRouter();

    //FETCH DATA TIME OF PAGE LOAD
    const fetchData = async () => {
        try {
           //get contract
           const contract = await connectingWithContract();

           //get account
           const connectAccount = await connectWallet();
           setAccount(connectAccount);

           //get username
           const userName = await contract.getUsername(connectAccount);
           setUserName(userName);

           //get my friend list
           const friendLists = await contract.getMyFriendList();
           setFriendLists(friendLists);

           //get all app user list //filtered
           const userList = await contract.getAllAppUser();
           /*const newArray = userList.filter(
            (user) => user.accountAddress.toLowerCase() !== address
           );
           const filterArray = filterUsersExcludingFriends(newArray, friendLists);
           //console.log(filterArray);
           setUserLists(filterArray);*/
           setUserLists(userList);
        } catch (error) {
           //setError("Please install and connect your wallet");
        }
    };

    /*if no friends, filtering excluding friends
    function filterUsersExcludingFriends( newArray, friendLists ) {
        const friendAddresses = new Set(friendLists.map((friend) => friend.pubKey));
        return newArray.filter((user) => !friendAddresses.has(user.accountAddress));
    }*/

    useEffect(()=>{fetchData();}, []);

    //READ MESSAGE
    const readMessage = async ( friendAddress ) => {
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (error) {
            console.log("Currently you have no message");
        }
    };

    //CREATE ACCOUNT
    const createAccount = async ({ name, accountAddress }) => {
        try {
            //if(name || accountAddress) return setError("Name and AccountAddress cannot be empty");
            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Error while creating your account, Please reload your browser")
        }
    };

    //ADD YOUR FRIEND
    const addFriends = async ({ name, accountAddress }) => {
        try {
            //if(name || accountAddress) return setError("Name and AccountAddress cannot be empty");
            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push('/');
            window.location.reload();
        } catch (error) {
            setError("Something went wrong while adding friend, try again.");
        }
    };

    //SEND MESSAGE TO YOUR FRIEND
    const sendMessage = async ({ msg, address }) => {
        try {
            //if(msg || address) return setError("Please type your message");
            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            router.push('/');
            window.location.reload();
        } catch (error) {
            setError("An unexpected error occured, Please try again later.")
        }
    };

    //READ INFO
    const readUser = async ( userAddress ) => {
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    };

    return(
        <ChatAppContext.Provider 
            value={{
                readMessage, 
                createAccount, 
                addFriends, 
                sendMessage,
                readUser,
                connectWallet,
                checkIfWalletConnected,
                account,
                userName,
                friendLists,
                friendMsg,
                loading,
                userLists,
                error,
                currentUserName,
                currentUserAddress,
            }}
        > 
            {children} 
        </ChatAppContext.Provider>
    );
};