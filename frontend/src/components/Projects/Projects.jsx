import { Button, Typography } from "@material-ui/core";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@material-ui/icons";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../action/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {

  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography variant="h3">Description -- </Typography>
          <Typography variant="h6" >{description}</Typography>
          <Typography variant="h3">Technologies Used -- </Typography>
          <Typography variant="h6">{technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {

   const projects =[1,2,3]; 
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((project,index) => (
          <ProjectCard
            key={index}
            url="https://new-ecommerce-store.herokuapp.com"
            projectImage="https://res.cloudinary.com/drujgzuhq/image/upload/v1650432038/products/yvqsrq9lpaqescbpv9ti.jpg"
            projectTitle="Ecommerce Store"
            description="Nothing to give at this moment"
            technologies="MongoDb , React , NodeJs , Express "
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
