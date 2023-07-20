import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

import { SiLeetcode } from "react-icons/si";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/Synonymous64",
    },
    {
      name: "Facebook",
      icon: <FiFacebook />,
      link: "https://www.facebook.com/prajwal.urkude.37",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/prajwal-urkude-8a1b6818b/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/praj_in_metaverse/",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/synonymous/",
    },
  ];
  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link href={link} target="_blank" className="social-icons-list-item-link">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
