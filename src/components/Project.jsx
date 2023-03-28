import "../styles/components/project.sass";

const Project = () => {
  return (
    <section id="project-card">
      <div className="project-info">
        <h3>Projetos</h3>
        <p>
          Aqui estão alguns dos meus projetos que publiquei, existem outros em
          andamentos e alguns que não publiquei.
        </p>
        <a href="http://github.com/ramonsabino" className="btn">
          Ver Projetos
        </a>
      </div>
    </section>
  );
};

export default Project;
