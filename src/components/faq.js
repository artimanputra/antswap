
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
      question: 'What is Web Development?',
      answer:
        'Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.',
    },
    {
      question: 'What is HTML?',
      answer: 'HTML, aka HyperText Markup Language, is the dominant markup language for creating websites and anything that can be viewed in a web browser.',
    },
    {
      question: 'What are some basic technical skills of a Front-End developer?',
      answer:
        'HTML, CSS, JavaScript, Frameworks (CSS and JavaScript frameworks), Responsive Design, Version Control/Git, Testing/Debugging, Browser Developer Tools, Web Performance, SEO (Search Engine Optimization), Command Line, CMS (Content Management System)',
    },
    {
      question: 'What is HTTP?',
      answer:
        'HTTP, aka HyperText Transfer Protocol, is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.',
    },
    {
      question: 'What is CORS?',
      answer:
        'CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets, scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource originated.',
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