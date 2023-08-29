import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant, slideIn } from "../utils/motion";


function About() {
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
            <div className="eyebrow-text">ABOUT US</div>
          </div>
          <div className="padding-section-x-small"></div>
          <div className="home_section-heading-1-line">
            <h2>Overview</h2>
          </div>
          {/* <div className="padding-section-small"></div> */}

       
       {/* about */}
       <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse  overflow-hidden items-center justify-center`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] xs:flex xs:items-center xs:justify-center py-4  md:flex md:items-center md:justify-center"
        >
          <img
            src='https://www.crema.finance/_nuxt/img/usdcFirst.93ffefe.png'
            alt="profile"
            className="max-w-[60%] rounded-[20px] xs:max-w-[70%] md:max-w[45%]"
          />
        </motion.div>
        <Tilt className="xs:w-[500px]  w-[5%] xs:flex xs:items-center xs:justify-center md:flex md:items-center md:justify-center pt-8 pb-10">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[388px] h-[200px] xs:h-[312px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card mt-5"
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-[#1f2328] rounded-[20px] py-5 px-12 min-h-[385px] w-full xs:w-full pb-15 "
            >    
            <div className="flex items-center justify-center mb-3 text-white-100 font-bold text-[24px] xs: text-lg">Empowering the Future with Linea</div>      
            <div className="flex items-center justify-center text-white-100 text-[30px] p-4 xs:text-sm" style={{padding:"inherit"}} >AntSwap is a decentralized finance (DeFi) project built on Linea. Our mission is to revolutionize the industry by introducing an ecosystem powered by NFTs and a decentralized exchange. AntSwap aims to create a transparent, secure, and user-friendly environment for seamless digital NFT,asset trading, liquidity provision, and yield incentives.</div>      
            </div>
          </motion.div>
        </Tilt>
      </div>
      {/* about */}
      
          
         </div>
       </div>
</section>
  );
}

export default About;
