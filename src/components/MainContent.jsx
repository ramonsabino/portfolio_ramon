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
      <footer id="footer">
        Projeto baseado no portfolio do Matheus Batisti e todos os direitos
        estão reservados a ele.
      </footer>
    </main>
  );
};

export default MainContent;
