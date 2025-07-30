import styles from './ProjectsStyles.module.css';
import airbnb from '../../assets/Airbnb.png.png';
import currencyEx from '../../assets/currencyEx.png';
import clearseas from '../../assets/clearseas.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={airbnb}
          link="https://github.com/Ebukahhh/airbnb_clone"
          h3="AirBnb"
          p="Landing page"
        />
        <ProjectCard
          src={currencyEx}
          link=""
          h3="Xchange"
          p="Currency Converter"
        />
        <ProjectCard
          src={clearseas}
          link=""
          h3="ClearSeas"
          p="Plastic Pollution"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
