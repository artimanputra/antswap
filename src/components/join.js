import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";


const Join = () => {
    return(
     <>        <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>
    </>
    )
}

export default SectionWrapper(Join, "join");
