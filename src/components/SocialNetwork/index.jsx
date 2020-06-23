import React from "react";
import { Twitter, Linkedin, Facebook } from "../../utils/Icons";

const SocialNetwork = ({ data }) => {
  const getIcon = (item) => {
    let icon = {};
    if (item === "twitter") icon = <Twitter />;
    if (item === "linkedin") icon = <Linkedin />;
    if (item === "facebook") icon = <Facebook />;
    return icon;
  };

  return (
    <ul className="socialWrap">
      {data.map((menu, index) => (
        <li key={index}>
          <a
            href={menu.url}
            alt={menu.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {getIcon(menu.icon)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialNetwork;
