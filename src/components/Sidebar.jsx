import SocialNetworks from "./SocialNetworks.jsx";
import InformationContainer from "./InformationContainer.jsx";
import Avatar from "../img/perry.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Ramon Sabino" />
      <p className="title">Desenvolvedor FullStack JR</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://wa.me/5585992907301" className="btn" target="_blank">
        Contate-me
      </a>
    </aside>
  );
};

export default Sidebar;
