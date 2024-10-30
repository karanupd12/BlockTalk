import React from "react";
import Image from "next/image";
//internal imports
import images from "../../assets";
import Style from './UserCard.module.css';

const UserCard = ({ el, i, addFriends }) => {
  return (
    <div className={Style.UserCard}>

      {/* AVATAR AND INFO */}
      <div className={Style.UserCard_box}>
        <Image className={Style.UserCard_box_img} src={images[`image${i + 1}`]} alt="user" width={100} height={100} /> 
        <div className={Style.UserCard_box_info}>
          <h3>{el.name}</h3>    
          <p>{el.accountAddress.slice(0,20)}..</p>
          <button onClick={() => addFriends({ name: el.name, accountAddress: el.accountAddress })}>Add Friend</button>
        </div>
      </div>

      {/* USER COUNTS */}
      <div>
        <small className={Style.number}>{i + 1}</small>
      </div>

    </div>
  );
};

export default UserCard;
