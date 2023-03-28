import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "../styles/components/socialnetwork.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "whatsapp", icon: <FaWhatsapp /> },
];

const SocialNetwork = () => {
  return (
    <section id="social-networks">
      <a href="https://github.com/ramonsabino" className="social-btn">
        <FaGithub size={25} />
      </a>
      <a
        href="http://www.linkedin.com/in/ramon-sabino-2904a61b1/"
        className="social-btn"
      >
        <FaLinkedinIn size={25} />
      </a>
    </section>
  );
};

export default SocialNetwork;
