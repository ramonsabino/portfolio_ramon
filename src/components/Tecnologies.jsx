import "../styles/components/technologiescontainer.sass";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
  DiGit,
  DiJava,
} from "react-icons/di";

const tecno = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.JS", icon: <DiNodejsSmall /> },
  { id: "react", name: "React.JS", icon: <DiReact /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "postgres", name: "PostgreSQL", icon: <DiPostgresql /> },
  ,
];

const Tecnologies = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {tecno.map((tech) => (
          <div className="technology-card" id={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Estas são as tecnologias que estudo e utilizo</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologies;
