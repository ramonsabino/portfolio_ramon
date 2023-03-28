import "../styles/components/maincontent.sass";
import About from "./About";
import Project from "./Project";
import Tecnologies from "./Tecnologies";

const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Tecnologies />
      <Project />
    </main>
  );
};

export default MainContent;
