import React from "react";
import Box  from "@mui/material/Box";
import { Col, Container,  Row } from "react-bootstrap";
const Skills = () => {

    return(
        <div>

        <Box className = "skillspage">
        <h1 className="skill-text">Skills</h1>
       
        <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a self-taught Front End developer from Cameroon. I build websites with a focus on providing the experience for everyone using them and responsiveness. love problem solving, design and care about writing and maintaining code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist' type ="circle" color="black">
                        <h3 className="head">Skills</h3>
                            <Box ml= "40px" mr= "300px" sx={{display : 'flex',justifyContent : 'space-between'}}>
                            <Row>
                                
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Git/Github</li>
                                </Col>
                                </Row> <br></br>
                                <Row>
                                <Col md={5}>
                                    
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    
                                </Col>
                            </Row>
                            </Box>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
            </Box>

        </div>
    )
}
export default Skills