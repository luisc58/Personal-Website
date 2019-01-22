import React from 'react';
import styled from 'styled-components';
import Icon from 'react-simple-icons'

const StyledSection = styled.section`
    padding: 4rem 0;
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-column-gap: 2rem;
    overflow-x: none;
    img { height: 16rem;}
    @media (max-width: 1100px) {
        padding: 0 2rem;
        grid-template-columns: auto ;
        img { margin: 0 auto; }
    }
    @media (max-width: 710px) {
        padding: 0 2rem;
        grid-template-columns: auto ;
        img { margin: 0 auto; height: 14rem; }
        p { font-size: 0.5rem;}
    }
    @media (max-width: 500px) {
        padding: 3rem 0;
        grid-template-columns: auto ;
        img { margin: 0 auto; height: 12rem; }
    }
`;


const Info = styled.div`
    display: inline-block;
    h3 {
        margin:0;
    } 

    p { font-size: 1.4rem;}
   
    .getInTouch {
        background-color: ${props => props.theme.blue};
        color:white;
        font-size:1.2rem;
        padding: 0.8rem 1.4rem;

        @media (max-width: 710px) {
         padding: 0.8rem 1rem;
         font-size: 1rem;
    }
    }

    @media (max-width: 710px) {
        p { font-size: 1.1rem;}
    }
`;

const Links = styled.div`
    list-style: none;
    display: flex;
    font-size: 1.1rem;
    opacity: 0.8;
    color: black;
   li:not(:first-child) {
       padding-left: 1rem;
   } 
   
`;

const About = () => (
    <StyledSection>
        <img src={require("../static/profilePic.png")} alt="Me"/>
        <Info>
            <h3>Luis Castillo</h3>
            <Links>
                <li><a href="https://www.github.com/luisc58/" target = "_blank" rel="noopener noreferrer"><Icon name='github' /></a></li>
                <li><a href="https://www.linkedin.com/in/luisc58/" target = "_blank" rel="noopener noreferrer"><Icon name='linkedin' /></a></li>
            </Links>
            <p>I’m a computer science student 
                currently studying at 
                <span> The City College of New York. </span>
                I’m a proud Dreamer pursuing a career in Software 
                engineering in the hopes of bringing modern infrascture 
                to undeserved communities around the world. On my free time I like to play sports and video games </p>
            <a href="mailto:luis.scholars@gmail.com" className="getInTouch">Get in Touch</a>
        </Info>
    </StyledSection>
);

export default About;