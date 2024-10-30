import React ,{ useState, useContext } from "react";
import Image from "next/image";
//internal imports
import Style from './Filter.module.css';
import images from '../../assets';
import { ChatAppContext } from '../../Context/ChatAppContext';
import { Model } from '../index';


const Filter = () => {

  const { account, addFriends } = useContext(ChatAppContext);
  //USESTATE
  const [addFriend, setAddFriend] = useState(false);

  return(
    <div className={Style.Filter}>

      {/* FILTER BOX */}
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            <Image src={images.search} alt='image' width={20} height={20} />
            <input type="text" placeholder="search.." />
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          <button>
            <Image src={images.clear} alt='clear' width={20} height={20} />
            CLEAR CHAT
          </button>
          <button onClick={() => setAddFriend(true)}>
            <Image src={images.user} alt='addfriend' width={20} height={20} />
            ADD FRIEND
          </button>
        </div>
      </div>

      {/* MODEL COMPONENT - ON PRESSING add friend */}
      {addFriend && (
        <div className={Style.Filter_model}>
          <Model openBox = {setAddFriend}
          title="WELCOME TO"
          head ="BLOCK TALK"
          info="The decentralized chat app built for ultimate privacy and security. Enjoy encrypted, secure conversations powered by blockchain, with no third-party access."
          smallInfo="Enter Your Friend Name and Address.."
          image={images.hero}
          functionName={addFriends}
          />  
        </div>
      )}

    </div>
  ) 
};

export default Filter;
