import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";


const Hero = () => {
    return(
     <><section className=" h-screen py-20 flex justify-center items-center"><motion.div variants={textVariant()}>
      
        <div className=" text-white z-90 h-full min-w-[1000px] flex items-start  title">
          <div></div>
          <div className="opacity-100 transform translate-x-0 w-[60%]  translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 flex-col items-start flex skew-y-0 transform-style-preserve-3d welcome"><span className=" text-left leading-tight pb-5">A Powerful Concentrated Liquidity Protocol</span> <span className="descri text-left leading-normal">Swap, earn and build with Crema's programmable liquidity network and unleash the full potential of your assets.</span></div>
          <div className=" w-"></div>
        </div>
        <div className="pt-20">

       </div>
      </motion.div>
      </section>
    </>
    )
}

export default Hero;
