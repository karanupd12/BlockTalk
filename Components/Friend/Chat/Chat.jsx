import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
//internal import
import Style from "./Chat.module.css";
import images from "../../../assets"
import { convertTime } from "@/utils/apiFeature";
import { Loader } from "@/Components";


const Chat = ({ functionName, readMessage, friendMsg, account, userName, loading, currentUserName, currentUserAddress, readUser }) => {

  //USESTATES
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState({ name: "" , address: "" });

  //Router
  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;   //if router is not ready
    setChatData(router.query);         
  }, [router.isReady]);
/*
  useEffect(() => {
    if(!chatData.address){
      readMessage(chatData.address);
      readUser(chatData.address);
    }
  }, []);*/

  return(
    <div className={Style.Chat}>

       {/* username, dp and adrress on top of chatbox */}
      {currentUserName && currentUserAddress ? (
        <div className={Style.Chat_user_info}>
          <Image src={images.accountName} alt="image" width={70} height={70} />
          <div className={Style.Chat_user_info_box}>
            <h4> {currentUserName} </h4>
            <p className={Style.show}> {currentUserAddress} </p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={Style.Chat_box_box}>

        {/* CHATs */}
        <div className={Style.Chat_box}>
          <div className={Style.Chat_box_left}>{
            friendMsg.map((el, i) => (
              <div>
                {el.sender == chatData.address ? (
                  <div className={Style.Chat_box_left_title}>
                      <Image src={images.accountName} width={50} height={50}/>
                      <span> 
                        {chatData.name} 
                        <small>{convertTime(el.timestamp)}</small>
                      </span>
                  </div>
                ):(
                  <div className={Style.Chat_box_left_title}>
                      <Image src={images.accountName} width={50} height={50}/>
                      <span> 
                        {userName} {""}
                        <small>{convertTime(el.timestamp)}</small>
                      </span>
                  </div>
                )}
                <p key={i + 1}> {el.msg} </p>
              </div>
            ))}
          </div>
        </div>

        {/* SEND MESSAGE BOX */}
        {currentUserName && currentUserAddress ? (
          <div className={Style.Chat_box_send}>
            <div className={Style.Chat_box_send_img}>
              <Image src={images.smile} alt="smile" width={50} height={50}/>
              <input type="text" placeholder="type message" onChange={(e) => setMessage(e.target.value)}/>
              <Image src={images.file} alt="file" width={50} height={50}/>      
              {loading == true ? (
                <Loader/>
              ) : (
                <Image src={images.send} alt="send" width={50} height={50} onClick={() => functionName({ msg: message, address: chatData.address})}/>
              )}

            </div>
          </div>
        ) : ""}

      </div>

    </div>
  );
};

export default Chat;
