"use client";
import productImage from "@/assets/product-image.png";
import { useState, useEffect, useRef, ComponentPropsWithoutRef } from "react";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Context Window",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 20,
    backgroundSizeX: 200,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "Text Editor",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 100,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Cusp Chat",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 18,
    backgroundSizeX: 250,
    backgroundSizeY: 300,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const maskImageVar = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      ease: "linear",
      repeatType: "loop",
      repeat: Infinity,
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;

    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      ref={tabRef}
      onClick={props.onClick}
      onMouseEnter={handleTabHover}
      className=" relative cursor-pointer border border-white/15 rounded-xl flex lg:flex-1 items-center p-2.5 gap-2.5 "
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage: maskImageVar,
          }}
          className="absolute -m-px rounded-xl inset-0 border border-[#FF7B61] " // Updated color
        ></motion.div>
      )}
      <div className="h-12 w-12 border rounded-lg border-white/15 inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={props.icon}
          className="h-5 w-5"
          autoplay
        />
      </div>
      <div>{props.title}</div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#FF7B61] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), 100, tabs[index].backgroundPositionX],
      animateOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), 100, tabs[index].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter ">
          Let AI write for you
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From small startups to large enterprises, our product will
          revolutionize the way businesses approach documentation.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row  gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              onClick={() => handleSelectTab(tabIndex)}
              selected={selectedTab === tabIndex}
              key={tab.title}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundSize,
              backgroundPosition,
              backgroundImage: `url(${productImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
