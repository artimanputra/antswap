import React, { useState } from 'react';
import './css/glowing.css'
function Faq() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
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
    <section className='bg-gray-800 '>
    <div className="text-white  min-h-screen">
      <h1 className="text-3xl text-center my-8">FAQ'S</h1>
      <div className="w-70% mx-auto my-4">
        <div className="accordion inline-flex flex-col h-60vw justify-between m-8">
          {faqsData.map((faq, index) => (
            <div className='gradient-border w-full m-7' id="box">
            <div className="accordion_item z-10 p-3  bg-[#1D1F20] w-full rounded h-full" key={index}>
              <div className="accordion_item_header" onClick={() => toggleAccordion(index)}>
                {faq.question}
              </div>
              {activeAccordion === index && (
                <div className="accordion_item_body">
                  <div className="accordion_item_body_content">{faq.answer}</div>
                </div>
              )}
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Faq;
