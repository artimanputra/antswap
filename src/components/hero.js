import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
// import video from "../assets/video.wmv"
import { Link } from "react-router-dom";
import { logo, component } from "../assets";
import bg from "../assets/bgimg.jpg";

const Hero = () => {
  return (
    <>
      <section className=" h-screen py-20 flex justify-center items-center">
        <div className=" text-white w-[70%] z-90 h-full min-w-[70%] flex items-center title max-sm:w-[100%] max-sl:p-4 max-sl:flex-col max-sl:justify-evenly">
          <div className=" pr-10 opacity-100 transform translate-x-0 w-[60%]  translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 flex-col items-start flex skew-y-0 transform-style-preserve-3d welcome">
            <img src={component} className="w-56 md:pt-40 sm:pt-20" />
            <span className=" text-left leading-tight pb-5">
              {" "}
              Empowering the Future with Linea
            </span>{" "}
            <span className="descri text-left leading-normal">
              AntSwap is a decentralized platform that facilitates the seamless
              exchange of digital assets and NFTs.
            </span>
            <div className=" flex w-[70%] pt-8">
              {/* <div className="btn_wrapper-center">
                <Link
                  to="https://t.me/Snailbrook_Entry"
                  rel="noopener noreferrer"
                  className="btn is-green w-inline-block"
                >
                  <div className="btn_text is-green is-small">Launch App</div>
                </Link>
              </div>
              <div className="btn_wrapper-center">
                <Link
                  to="https://t.me/Snailbrook_Entry"
                  rel="noopener noreferrer"
                  className=" w-inline-block bg-black"
                >
                  <div className="btn-gradient-2 bg-black is-small ">Docs</div>
                </Link>
              </div> */}
              <div class="w-layout-grid home_sm-grid">
                {/* copy */}
                <div
                  id="w-node-_727d1bb7-f82d-86bb-264f-3997fdfaf372-e8ebca06"
                  class="home_sm-grid-item"
                >
                  <Link
                    to="#"
                    rel="noopener noreferrer"
                    class="btn_square-glass w-inline-block"
                  >
                    <div class="btn_square-filler-text">
                      <p class="btn_square-embed w-embed text-[10px]">
                        Launch&nbsp;&nbsp;App
                      </p>
                      <div class="btn_circular-embed-text">Launch App</div>
                    </div>
                  </Link>
                </div>
              {/* copy */}
                {/* copy */}
                <div
                  id="w-node-_727d1bb7-f82d-86bb-264f-3997fdfaf372-e8ebca06"
                  class="home_sm-grid-item"
                >
                  <Link
                    to="#"
                    rel="noopener noreferrer"
                    class="btn_square-glass w-inline-block"
                  >
                    <div class="btn_square-filler-text">
                      <p class="btn_square-embed w-embed text-[10px]">
                        Docs
                      </p>
                      <div class="btn_circular-embed-text">Docs</div>
                    </div>
                  </Link>
                </div>
              {/* copy */}
              </div>
            </div>
          </div>
          <div className=" w-[50%] xs:w-[70%]  hero_video">
            <video autoPlay loop muted>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
