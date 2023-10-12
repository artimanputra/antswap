
import React, { useState, useRef, useEffect } from "react";

import { FiPlus } from "react-icons/fi";

export default function FaqApp() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    console.log('seccid')
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
      console.log(index)
    }
  };

  const faqsData = [
    {
      question: 'How does ANTSWAP work? ',
      answer:
        'ANTSWAP is a decentralized platform that facilitates the seamless exchange of digital assets and NFTs. Built on blockchain technology, ANTSWAP utilizes smart contracts to enable secure and transparent transactions between users.',
    },
    {
      question: 'What are the key features of ANTSWAP? ',
      answer: 'ANTSWAP offers a user-friendly interface, fast and secure transactions, support for a wide range of digital assets and NFTs, decentralized governance, liquidity provision, yield farming, and a vibrant community.',
    },
    {
      question: 'How can I get support or assistance with using ANTSWAP? ',
      answer:
        "ANTSWAP provides a dedicated support team that can assist you with any queries or issues you might have. You can reach out to them through the platform's customer support channels.",
    },
    {
      question: "What is the process for purchasing or acquiring ANTSWAP's digital tokens?",
      answer:
        "You can acquire ANTSWAP tokens by participating in token sales, trading on supported exchanges, or engaging in the platform's token distribution mechanisms like liquidity mining and yield farming.",
    },
    {
      question: 'Security and Trust ',
      answer:
        'Your security and trust are extremely important to us. AntSwap leverages blockchain technology to secure all transactions, ensuring the authenticity and provenance of each NFT. We prioritize transparency, and our smart contract integration ensures that artists receive fair compensation for their creations even after their initial sale. We Believe in Tranparency and all the Upcoming Products should passed Through an audit Before Deployment.',
    },
  ];

  return (
    
     <section
      id="roadmap"
      data-w-id="95349133-c52e-ed45-f81f-80163863250d"
      className="section_roadmap"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium"></div>
          <div className="padding-section-x-small"></div>
          <div className="home_section-heading-1-line">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="padding-section-small"></div>
          <div className="accordion">
          {faqsData.map((faq, index) => (
            <div className="accordion-item z-10 p-3 text-white " key={index}>
              <div className="accordion-item-header text-left" onClick={() => toggleAccordion(index)}>
                {faq.question}
              </div>
              {activeAccordion === index && (
                <div className="accordion-item-body text-white h-16 text-left contents">
                  <div className="accordion-item-body-content">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
{/* faq */}

      <div className="padding-section-large"></div>
        </div>
      </div>
    </section>

  );
}