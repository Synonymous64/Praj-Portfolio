"use client";

import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    // <div className="hero">
    //   <h1 className="hero-title">Hi, my name is</h1>
    //   <h2 className="hero-title-large">Prajwal Urkude</h2>
    //   <h3 className="hero-title-large hero-title-sub">
    //     A Passionate Technophile who also happens to be a IT Graduate.
    //   </h3>
    //   <p className="hero-text">
    //     Progression and sustainable growth is my true asset. I'm a software
    //     engineer with expertise in distinct tech domains. My current focus
    //     revolves around developing top-notch digital experience concerned about
    //     user needs. You will find me bringing new ideas and insights to the
    //     table.
    //     <Link
    //       href="https://codepen.io/synonymous64"
    //       target="_blank"
    //       className="link"
    //     >
    //       CodePen
    //     </Link>
    //   </p>
    //   <div className="hero-button">
    //     <Button text="Check out my projects" link="/" />
    //   </div>
    // </div>
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Prajwal Urkude.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        I craft things for the web.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I&apos;m a software engineer with expertise in distinct tech domains. My
        current focus revolves around developing top-notch digital experience
        concerned about user needs. You will find me bringing new ideas and
        insights to the table.&nbsp;
        <Link href="https://codepen.io/synonymous64" target="_blank" className="link">
          CodePen.
        </Link>
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Check out my Projects"
          link="/"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
