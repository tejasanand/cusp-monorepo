"use client";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Inika } from "next/font/google";

const inika = Inika({ subsets: ["latin"], weight: ["400", "700"] });

export const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      className="relative md:h-[800px] overflow-hidden h-[492px] flex items-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 110,
      }}
    >
      {/* Start Background Overlay */}
      <div className="absolute inset-0 bg-black"></div>
      {/* End Background Overlay */}
      {/* Start Planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-[#FF7B61] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(255,123,97)_37.7%,rgb(255,123,97))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,244,.1),0_0_50px_rgb(255,123,97)] text-transparent bg-clip-text text-center font-inika"></div>
      {/* End Planet */}
      {/* Start Ring 1 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] opacity-20 border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full opacity-20 border border-dashed border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      {/* End Ring 3 */}
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white, rgb(255, 123, 97))] text-transparent bg-clip-text text-center">
          cusp
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
          Write, Understand important documentation with ease. We are building
          the next generation of word processors with in house AI
        </p>
        <div className="flex justify-center mt-5"></div>
      </div>
    </motion.section>
  );
};
