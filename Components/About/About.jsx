import React from "react";
import Image from "next/image";
//internal imports
import styles from "./About.module.css";
import images from "../../assets/index";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.about}>
        <h1>About Our Decentralized Chat Application</h1>
        <p>
          Welcome to <span>BLOCK TALK</span>, a next-generation decentralized
          chat platform built on blockchain technology to ensure full privacy,
          security, and user control over conversations. Integrated with
          MetaMask for secure authentication, our platform offers end-to-end
          encryption and immutable messaging, giving users peace of mind that
          their communications remain private and tamper-proof, inaccessible to
          any third party.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>
            Blockchain-Powered Messaging: Messages are decentralized and stored
            securely using smart contracts, ensuring data immutability.
          </li>
          <li>
            End-to-End Encryption: Communication is secured with top-tier
            cryptography, guaranteeing privacy.
          </li>
          <li>
            MetaMask Integration: Simplified and secure user authentication
            through MetaMask, leveraging Ethereum’s decentralized nature for
            login.
          </li>
          <li>
            Friend Approval Process: Each conversation is facilitated by
            transaction approval, making interactions fully consent-driven.
          </li>
          <li>
            Smart Contract Assurance: Data integrity and message delivery are
            ensured by decentralized smart contracts on the blockchain.
          </li>
          <li>
            Seamless Network Switching: Automatic switching between network
            layers allows for smooth, uninterrupted conversations.
          </li>
          <li>
            Transaction Transparency: All user activities are stored immutably
            on-chain, offering auditability and transparency at any time.
          </li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          In an age where privacy is often compromised, our platform ensures
          that your messages remain secure and only accessible by you and your
          intended recipients. Using blockchain technology, we provide a
          tamper-proof solution to digital communication.
        </p>
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Developer Info */}
          <div className={styles.developerInfo}>
            <h3>Developer Contact Info</h3>
            <p>
              <strong>Name:</strong> Karan Upadhyay{" "}
            </p>
            <p>
              <strong>Full Stack WEB3 Developer</strong>
            </p>
            <p>
              <strong>Email:</strong> karan.devblocks@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 8826865534
            </p>

            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/krn_0twelve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.instagram}
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://github.com/karanupd12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.github}
                  alt="github"
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/karanupd12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={images.linkedin}
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>

          {/* Website Logo */}
          <div className={styles.logo}>
            <Image
              src={images.logo}
              alt="Website Logo"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* All Rights Reserved Tag */}
        <div className={styles.rights}>
          <p className={styles.rightsReserved}>
            &copy; 2024 BLOCK TALK. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
