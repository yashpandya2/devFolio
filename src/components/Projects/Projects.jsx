import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="project" className="logo"/>
          <Typography variant="h5">{projectTitle}</Typography>
        </div>

        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Talk : {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
       
          <ProjectCard
            url="https://github.com/anujvaghani0/Eventoria-project"
            projectImage="https://avatars.githubusercontent.com/u/70088826?v=4"
            projectTitle="EVENTORIA"
            description="An Event Management System with the aim to Unify Events, Users and Organizers."
            technologies="ReactJs, NodeJs, ExpressJs, ThreeJs, MongoDB"
          />
          <ProjectCard
          
            url="https://cryptmoney.netlify.app/"
            projectImage="https://user-images.githubusercontent.com/70088826/175761728-81c79c20-e706-450c-afa3-2c21ebfb1a93.png"
            projectTitle="CryptMoney"
            description="This is my CryptoCurrency based website called CryptMoney in which you can monitor current prices of top 100 cryptocurrencies in two different currencies( INR(Indian rupees) and USD(american dolar) )."
            technologies="ReactJs, API, Material UI, React-Router-Dom"
          />
          <ProjectCard
            url="https://github.com/yashpandya2/SandBox"
            projectImage="https://user-images.githubusercontent.com/80821403/175256100-2a68f455-9d6f-44b2-b7ef-d3df8ce1d59c.png"
            projectTitle="SandBox - A clone"
            description="This is a basic responsive clone website to make fontend development more powerful."
            technologies="HTML, CSS, JavaScript"
          />
      
      </div>

      <Typography variant="h3">
        All Projects made with 💖 
      </Typography>
    </div>
  );
};

export default Projects;

