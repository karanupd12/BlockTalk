import React from 'react';
import Style from './FAQs.module.css';

const FAQs = () => {
  return (
    <div className={Style.faqContainer}>

      <h2>Frequently Asked Questions:</h2>

      <div className={Style.contact_developer}>
        <p>
          Feel free to reach out to the developer with any further technical inquiries. Email us at: <strong>Karan.devblocks@gmail.com</strong>
        </p>
      </div>

      <div className={Style.faqItem}>
        <h4>1. How does BLOCK TALK ensure message immutability?</h4>
        <p>
          BLOCK TALK uses blockchain smart contracts to store message hashes on-chain, ensuring that once a message is sent, it cannot be altered or tampered with. The decentralized nature of the blockchain ensures data is replicated across multiple nodes, creating an immutable record.
        </p>
      </div>
      <div className={Style.faqItem}>
        <h4>2. What role does MetaMask play in user authentication?</h4>
        <p>
          MetaMask acts as a secure Web3 wallet that enables user authentication without relying on centralized servers. By connecting your MetaMask account, you verify ownership of your public-private key pair, enabling secure login and transaction approvals.
        </p>
      </div>
      <div className={Style.faqItem}>
        <h4>3. How is data privacy guaranteed in a decentralized chat application?</h4>
        <p>
          Data privacy is ensured through end-to-end encryption. Each conversation is encrypted before leaving the user’s device and is only decrypted by the intended recipient. No intermediaries, including the platform itself, have access to the content of the messages.
        </p>
      </div>
      <div className={Style.faqItem}>
        <h4>4. Can third parties access my messages on BLOCK TALK?</h4>
        <p>
          No. Thanks to the decentralized architecture and strong cryptographic protocols, only you and the recipient can access the messages. Even in cases of node failure or blockchain compromise, the content of the message remains encrypted and inaccessible to any third party.
        </p>
      </div>
      <div className={Style.faqItem}>
        <h4>5.  How does the transaction system work for creating an account, adding friends, and sending messages?</h4>
        <p>
        In BLOCK TALK, every action is powered by blockchain transactions. To create an account, add a friend, or send a message, a transaction must be initiated from the user's side (not the recipient). For each of these actions, MetaMask will prompt you to approve the transaction, ensuring security and immutability on the blockchain. There are no actions taken or fees incurred from the receiving end.
        </p>
      </div>
      <div className={Style.faqItem}>
        <h4>6. What happens if a blockchain network goes down or is congested?</h4>
        <p>
          BLOCK TALK automatically switches between different blockchain layers or scaling solutions to ensure smooth, uninterrupted conversations. By utilizing Layer 2 networks and sidechains, the platform minimizes latency and keeps conversations flowing, even during high network congestion.
        </p>
      </div>
      <div className={Style.faqItem}>
        <h4>7. How can I track my transactions and message history?</h4>
        <p>
          All activities, including friend approvals and message transactions, are stored on-chain. You can easily track the status of each interaction and verify message delivery by querying the blockchain or using block explorers integrated into the platform.
        </p>
      </div>
      <div className={Style.faqItem}>
        <h4>8. Why does BLOCK TALK require transaction approval for messaging?</h4>
        <p>
          To ensure both privacy and integrity, every new friend connection and messaging session is confirmed by a transaction on the blockchain. This adds a layer of security and accountability, ensuring that both parties agree to the communication.
        </p>
      </div>
      <div className={Style.faqItem}>
        <h4>9. What kind of encryption does BLOCK TALK use?</h4>
        <p>
          BLOCK TALK uses state-of-the-art asymmetric encryption (such as Elliptic Curve Cryptography) for securing messages. Each user has their own private-public key pair, ensuring that messages are encrypted on the sender’s end and can only be decrypted by the intended recipient.
        </p>
      </div>

    </div>
  );
};

export default FAQs;
