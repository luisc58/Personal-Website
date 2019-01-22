import React, { Component } from 'react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import Nav from './components/Nav';
import About from './components/About';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Separator from './components/Separator';
import Projects from './components/Projects';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';
import MyProjects from './components/MyProjects';
import "./static/nprogress.css";

const theme = {
  green: '#1ED860',
  black: '#0D0E0E',
  blue: '#2D79D2',
  maxWidth: '1000px'
};

const StyledPage = styled.div`
  background: white;
  padding: 1.3rem 3rem;
  color: ${props => props.theme.black};
  @media (max-width: 480px) {
        padding: 1.3rem 0rem; 
    }
;
  @media (max-width: 700px) {
        padding: 1.3rem 1rem; 
    }
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-family: 'Signika', sans-serif;
    font-size: 12px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body { 
    margin: auto;
    padding: 0rem 4rem;
    font-size: 1.5rem;
    line-height:1.65;
    overflow-x: none;
    max-width: 1450px;
    @media (max-width: 700px) {
      padding: 0rem 3rem;
        p { font-size: 1.2rem; }
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      padding: 0rem 2rem;
        p { font-size: 0.9rem; }
        font-size: 1rem;
    }

  a {
    text-decoration: none;
    color: ${theme.black};
  }

  p {
    font-size: 1.4rem;
  }
  span {
    color: ${theme.green};
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}> 
        <StyledPage>
            <Nav />
            <About />
            <Tech />
            <Experience />
            <Separator name = "My Recent Projects"/>
            <Projects />
            <ProjectTwo />
            <ProjectThree />
            <Separator name = "More Projects"/>
            <MyProjects />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default App;
