import React from "react";
import github from "./sim/github.png";
import insta from "./sim/insta.png";
import linkdin from "./sim/linkedin.png";
import gmail from "./sim/gmail.png";

const Linkedin_Link = "https://www.linkedin.com/in/shailesh8010/";
const Instagram_Link = "https://www.instagram.com/shaileshgaikwad_tkd/-sa";
const Github_Link = "https://github.com/Shailesh8010";
const Email_Link = "mailto:2020bec049@sggs.ac.in";

export default function SocialLinks() {
  const iconSize = "w-12 h-12 mt-[30px] "; // Adjust the size as needed

  return (
    <div className="flex items-center justify-center gap-4">
      <a
        href={Instagram_Link}
        className={`instagram ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={insta} alt="Instagram" />
      </a>
      <a
        href={Linkedin_Link}
        className={`linkedin ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkdin} alt="LinkedIn" />
      </a>
      <a
        href={Github_Link}
        className={`github ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
      <a
        href={Email_Link}
        className={`email ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={gmail} alt="Email" />
      </a>
    </div>
  );
}