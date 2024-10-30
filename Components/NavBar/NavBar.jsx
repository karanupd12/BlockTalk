import Reac, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//internal imports
import Style from './NavBar.module.css';
import { ChatAppContext } from "../../Context/ChatAppContext";
import { Model, Error } from "../index";
import images from "../../assets";

const NavBar = () => {
  const menuItems = [
  {
    menu: "All Users",
    link: "alluser",
  },
  {
    menu: "CHAT",
    link: "/",
  },
  {
    menu: "ABOUT US",
    link: "/about",
  },
  {
    menu: "FAQs",
    link: "/faqs",
  },
  ];

  //USE STATE
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, userName, connectWallet, createAccount, error } = useContext(ChatAppContext);

  return (
    <div className={Style.NavBar}>

      <div className={Style.NavBar_box}>   
        <div className={Style.Navbar_box_left}>
          <Image src={images.logo} alt="logo" width={50} height={50}/>
        </div>
        <div className={Style.Navbar_box_right}>
          {/* DESKTOP*/}
          <div className={Style.Navbar_box_right_menu}>
            {menuItems.map((el, i) => (
              <div onClick = { ()=>setActive(i+1) } key={i+1} className={`${Style.Navbar_box_right_menu_items} ${active == i+1? Style.active_btn : "" }`}>
                <Link className={Style.Navbar_box_right_menu_items_link} href={el.link}> 
                  {el.menu}
                </Link>
              </div>
            ))}
          </div>
        
          {/* MOBILE - designed for mobile */}
          {open && (
            <div className={Style.mobile_menu}>
              {menuItems.map((el, i) => (
                <div onClick = { ()=>setActive(i+1) } key={i+1} className={`${Style.mobile_menu_items} ${active == i+1? Style.active_btn : "" }`}>
                  <Link className={Style.mobile_menu_items_link} href={el.link}> 
                    {el.menu}
                  </Link>
                </div>
              ))}
              <p className={Style.mobile_menu_btn}>
                <Image src={images.close} alt="close" width={50} height={50} onClick={ ()=>setOpen(false) }/>
              </p>
            </div>
          )}

          {/* CONNECT WALLET */}
          <div className={Style.Navbar_box_right_connect}>
            {account == "" ? (                                                 
              <button onClick={ ()=>connectWallet() }>
                {""}
                <span>Connect Wallet</span>
              </button>
            ) : (
              <button onClick={ ()=>setOpenModel(true) }>                 
                {""}
                <Image src={userName ? images.accountName : images.create2} alt="Account image" width={20} height={20} />       
                {""}
                <small>{userName || "Create Account" }</small>
              </button>
            )}
          </div>

          {/* OPEN MENU - burger menu*/}
          <div className={Style.Navbar_box_right_open} onClick={()=>setOpen(true)}>
            <Image src={images.open} alt="open" width={30} height={30}/>
          </div>
        </div>
      </div>

      {/* MODEL COMPONENT */}
      {openModel && (
        <div className={Style.modelBox}>
          <Model 
            openBox={setOpenModel}
            title="WELCOME TO"
            head="Block Talk"
            info='The decentralized chat app built for ultimate privacy and security. Enjoy encrypted, secure conversations powered by blockchain, with no third-party access.'
            smallInfo="Register Here"
            image={images.hero}
            functionName={createAccount}
            address={account}
          />
        </div>
      )}
      
      {error == "" ? "" : <Error error={error} />}

    </div>
  );
};

export default NavBar;
