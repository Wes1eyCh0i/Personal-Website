import Link from "next/link";
import { FaGithub, FaLinkedin, FaHandshake } from "react-icons/fa";

interface SocialsProps {
  ContainerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Wes1eyCh0i" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/wesc01/" },
  {
    icon: <FaHandshake />,
    path: "https://app.joinhandshake.com/profiles/42306469",
  },
];

const Socials: React.FC<SocialsProps> = ({ ContainerStyles, iconStyles }) => {
  return (
    <div className={ContainerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
