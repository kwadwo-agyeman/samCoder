import React from "react";
import { Box, Tooltip } from "@mui/material";
import htmllogo from "../../assets/htmlIcon.png";
import csslogo from "../../assets/cssIcon.png";
import jslogo from "../../assets/jsIcon.png";
import reactlogo from "../../assets/reactIcon.png";
import bootstraplogo from "../../assets/bootstrap.png";
import muilogo from "../../assets/muiIcon.png";
import nodelogo from "../../assets/nodeIcon.png";
import expresslogo from "../../assets/expressIcon.png";
import mongoLogo from "../../assets/mongoIcon.jpg";
import postgreSQL from "../../assets/PostgreSQLLogo.png";
import './techstack.css'

const TechStack = () => {
    const techImages = [
        { techName: "HTML", techImg: htmllogo },
        { techName: "CSS", techImg: csslogo },
        { techName: "JavaScript", techImg: jslogo },
        { techName: "React", techImg: reactlogo },
        { techName: "Bootstrap", techImg: bootstraplogo },
        { techName: "Material-UI", techImg: muilogo },
        { techName: "Node.js", techImg: nodelogo },
        { techName: "Express", techImg: expresslogo },
        { techName: "MongoDB", techImg: mongoLogo },
        { techName: "PostgreSQL", techImg: postgreSQL },
      ];
    
  return (
    <div className="techstack--container">
      <header>
        <h3 className="custom-font">My Tech Stack</h3>
      </header>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)', 
            md: 'repeat(4, 1fr)', 
          },
          gap: 2, 
          padding: 2,
        }}
      >
        {techImages.map(({techName,techImg}, index) => (
          <Box classsName="image--container" key={index} sx={{ width: '100%', padding: 1 }}>
            <Tooltip title={techName}>

            <img src={techImg} alt={`Tech ${index}`} className="logo--icon" style={{ width: '60%', height: 'auto' }} />
            </Tooltip>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default TechStack;
