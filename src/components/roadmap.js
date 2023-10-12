import React from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundColor:
        '#1f2328',
        color: "#fff",
        backgroundPosition: "0 0, 0 0, 0 0",
        backgroundSize: "auto, cover, auto",
        transition: "background-color .15s cubic-bezier(.075, .82, .165, 1)",
        borderRadius: '20px',
      }}
      contentArrowStyle={{ borderRight: "10px solid #232631" }}
      iconStyle={{ background: experience.iconBg, color:experience.icon_color }}
      icon={
        <div className="flex justify-center items-center w-full h-full w-[60%] h-[60%] object-contain text-[35px]">
          {experience.icon}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      </div>
      <ul className="mt-5 list-disc flex flex-col items-start ml-5  space-y-2">
    {experience.points.map((point, index)=>(
     <li 
     key={`experience-point-${index}`}
     className="text-white-100 text-[14px] pl-1 tracking-wider"
     >
   {point}
     </li>
    ))}

  </ul>
    </VerticalTimelineElement>
  );
};

function Roadmap() {
  return (
    <section
      id="roadmap"
      data-w-id="95349133-c52e-ed45-f81f-80163863250d"
      className="section_roadmap"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium"></div>
          <div className="roadmap_eyebrow-wrapper">
            <div className="eyebrow-text">OUR ROADMAP</div>
          </div>
          <div className="padding-section-x-small"></div>
          <div className="home_section-heading-1-line">
            <h2>The Road of the AntSwap</h2>
          </div>
          {/* <div className="padding-section-small"></div> */}
          {/* <div className="home_roadmap-subheading">
            <p className="text-size-large is-gray-04">
              Our roadmap will remain shrouded in mystery until we deem the
              right time. However, all development steps we will take care to
              build and expand SnailBrook, fostering innovation and
              collaboration among meme coin enthusiasts.
            </p>
          </div> */}
          <div className="padding-section-small"></div>
          <div className="btn_wrapper-center">
            <Link
              to="https://twitter.com/AntSwapfinance"
              rel="noopener noreferrer"
              className="btn is-green w-inline-block"
            >
              <div className="btn_text is-green is-small">Stay updated</div>
            </Link>
          </div>
          <div className="padding-section-medium"></div>

          {/* Timeline */}
          <div className="mt-5 flex flex-col ">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </VerticalTimeline>
          </div>
          {/* Timeline */}

          {/* <div className="padding-section-large"></div> */}
        </div>
      </div>
      {/* <div class="home_faqs-background-wrapper"> */}
      {/* <div className="home_roadmap-background-2"></div> */}
      {/* <div className="home_roadmap-background-1"></div> */}
      {/* </div> */}
    </section>
  );
}

export default Roadmap;
