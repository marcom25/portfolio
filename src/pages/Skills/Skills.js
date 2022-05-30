
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";

import { ReactComponent as CSS3 } from "../../images/css.svg";
import {ReactComponent as REACT } from "../../images/react.svg";
import {ReactComponent as BOOTSTRAP } from "../../images/bootstrap.svg";
import {ReactComponent as CSHARP } from "../../images/c#.svg";
import {ReactComponent as EXPRESS } from "../../images/express.svg";
import {ReactComponent as GIT } from "../../images/git.svg";
import {ReactComponent as GITHUB } from "../../images/github.svg";
import {ReactComponent as HTML } from "../../images/html.svg";
import {ReactComponent as JAVA } from "../../images/java.svg";
import {ReactComponent as JAVASCRIPT } from "../../images/javascript.svg";
import {ReactComponent as MYSQL } from "../../images/mysql.svg";
import {ReactComponent as NODEJS } from "../../images/nodejs.svg";
import {ReactComponent as POSTMAN } from "../../images/postman.svg";
import {ReactComponent as PYTHON } from "../../images/python.svg";



const Skills = () => {
  return (
    <div id="skills" className="skills ">
      <h1 className="pos-skills">Skills</h1>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        justifyContent="center"
        columns={{xs: 6, md: 12}}
        
      >
        <Grid item xs={2}>
          <REACT className="icon" alt="React-Logo"/>
          {/* <Icon className=" icon" icon="logos:react" /> */}
        </Grid>
        <Grid item xs={2}>
          <JAVASCRIPT className="icon" alt="JavaScript-Logo"/>
          {/* <Icon className=" icon" icon="logos:javascript" /> */}
        </Grid>
        <Grid item xs={2}>
          <JAVA className="icon" alt="Java-Logo"/>
          {/* <Icon className=" icon" icon="logos:java" /> */}
        </Grid>
        <Grid item xs={2}>
          <PYTHON className="icon" alt="Python-Logo"/>
          {/* <Icon className=" icon" icon="logos:python" /> */}
        </Grid>
        <Grid item xs={2}>
          <POSTMAN className="icon" alt="Postman-Logo"/>
          {/* <Icon className=" icon" icon="logos:postman-icon" /> */}
        </Grid>
        <Grid item xs={2}>
          <MYSQL className="icon" alt="MySQL-Logo" />
          {/* <Icon className=" icon" icon="logos:mysql" /> */}
        </Grid>
        <Grid item xs={2}>
          <CSS3 className="icon" alt="CSS-Logo" />
          {/* <Icon className=" icon" icon="logos:css-3" /> */}
        </Grid>
        <Grid item xs={2}>
          <HTML className="icon" alt="HTML-Logo" />
          {/* <Icon className=" icon" icon="logos:html-5" /> */}
        </Grid>
        <Grid item xs={2}>
          <EXPRESS className="icon" alt="Express-Logo" />
          {/* <Icon className=" icon" icon="logos:express" /> */}
        </Grid>
        <Grid item xs={2}>
          <BOOTSTRAP className="icon" alt="Bootstrap-Logo" />
          {/* <Icon className=" icon" icon="logos:bootstrap" /> */}
        </Grid>
        <Grid item xs={2}>
          <NODEJS className="icon" alt="NodeJS-Logo" />
          {/* <Icon className=" icon" icon="logos:nodejs" /> */}
        </Grid>
        <Grid item xs={2}>
          <GIT className="icon" alt="Git-Logo" />
          {/* <Icon className=" icon" icon="logos:git-icon" /> */}
        </Grid>
        <Grid item xs={2}>
          <GITHUB className="icon" alt="Github-Logo" />
          {/* <Icon className=" icon" icon="logos:github-icon" /> */}
        </Grid>
        <Grid item xs={2}>
          <CSHARP className="icon" alt="C#-Logo" />
          
        </Grid>
      </Grid>

    </div>
  );
};

export default Skills;
