"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Prajwal, and I am passionate about creating
            digital content for the web. My interest in web development was
            sparked in 2022 when I created my first project called TextUtils, a
            text editor app built using React and Node.js.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations at{" "}
            <Link href="https://github.com/Synonymous64" className="link" target="_blank">
              Github.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Did my internship in{" "}
            <Link href="http://www.itninfosystems.com/" className="link" target="_blank">
              IT-NETWORKZ Infosystem
            </Link>
            {" "} as saleforce and web-developer intern. I am determined to prove that
            I am an experienced and valuable candidate for the software
            developer role.
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://e-commerce-store-kohl.vercel.app/"
            >
              E-Store,
            </Link>
            &nbsp;aimed at enhancing full stack development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">C/C++</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">Tailwind</li>
            <li className="about-grid-info-list-item">Sanity.io</li>
            <li className="about-grid-info-list-item">MySQL</li>
            <li className="about-grid-info-list-item">MongoDB</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/praj.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
