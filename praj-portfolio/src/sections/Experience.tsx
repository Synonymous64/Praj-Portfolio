"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experience = [
    {
      name: "Code Clause",
      role: "Full Stack Developer",
      url: "https://internship.codeclause.com/",
      start: "September 2023",
      end: "Present",
      shortDescription: [
        "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
        "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
    {
      name: "LetsGrowMore",
      role: "Java Developer",
      url: "https://drive.google.com/file/d/1k1WXJfIOMLVdo_6_gU1a2lSwO67juc3N/view",
      start: "August 2023",
      end: "October 2023",
      shortDescription: [
        "Throughout my work, I've utilized various technologies, including Java programming language, Java Servlets Web Features, Applet, SQL Database, Java Swing, Java GUI (Graphical User Interface), JFrame and Ajax.",
        "Over time, I have developed and shared over 5 projects based on Java.",
        "As a result, I was elected to managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
      ],
    },
    {
      name: "Oasis Infobyte",
      role: "Web Developer",
      url: "https://drive.google.com/file/d/1rgiNLfaNaN7Jqqiv9Wb1rLG8mkTVKBu5/view",
      start: "July 2023",
      end: "August 2023",
      shortDescription: [
          "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
          "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
          "I have developed and shared over 6 projects using React throughout my tenure.",
      ],
    },
    {
        name: "CodeStomp Hackthon",
        role: "Organiser",
        url: "https://www.hackerrank.com/code-stomp",
        start: "May 2023",
        end: "August 2023",
        shortDescription: [
          "As the selected organiser of the Digits-in-Tech Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
          "Additionally, Constructed Coding Questions based on Queues, Stack, HashMap, and other Data Structures.",
          "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
        ],
      },
    {
      name: "IT-NetworkZ Infosystems",
      role: "Web and Salesforce Developer",
      url: "https://drive.google.com/file/d/1qvZ4VFNLjbg1DcjIUX_6BlIkjdIPjlbW/view?usp=drivesdk",
      start: "February 2022",
      end: "April 2022",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects.",
        "Worked with Respective mentors where I learned about the Customer-Relationship Model of Salesforce.",
        "Built many Static Websites using Vanilla Javascript, HTML5, and Custom CSS.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experience.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experience[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experience[selected].url} className="link">
                  {experience[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experience[selected].start} - {experience[selected].end}
            </p>
            <ul className="exp-details-list">
              {experience[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;