import React from 'react';
import styled from 'styled-components';
import Icon from 'react-simple-icons'

let projects = {
    'OldGuide': {
        'name': 'OldGuide',
        'description': 'Health care website for the elderly',
        'tools': ['NodeJS', 'PUG', 'SCSS']
    },
    'Insta': {
        "name" : "Instagram Clone",
        "description": "Instagram IOS Application that uses a parse authentication and asynchronous updates",
        "tools": ['SWIFT', 'Parse']
    },
    'twitter': {
        'name': "Twitter clone",
        'description': 'Twitter IOS application for Codepath. User is able to  tweet, retweet, favorite , upload images, and view the last 20 tweets from their home timeline.',
        'tools': ['SWIFT', 'Twitter API']
    },

    'Circlo': {
        'name': "Circlo",
        'description': 'IOS game that uses 3d touch',
        'tools': ['SWIFT']
    }
}
const ProjectContainer = styled.div`
    padding: 0 3rem;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    grid-template-rows: auto;
    grid-row-gap: 1rem;
    height: 100%;

    @media (max-width: 1100px) {
        grid-template-columns: auto;
        padding: 0 2rem;
    }
    @media (max-width: 480px) {
        grid-template-columns: auto;
        padding: 0;
    } 
`;

const Project = styled.div`
    border-radius: 0.5rem;
    margin-top: 5rem;
    padding: 3rem;
    background-color: black;
    color: white;  
    p {
        font-size: 1.3rem;
        margin: 0;
    }
    h2 { margin: 1rem 0;}
    li {
        list-style: none;
        color: white;
        opacity: 0.8;
        margin: none;
        display:inline-flex;
        font-size: 1.1rem;
    ul:first-child{ 
        padding: 1rem 1rem 1rem 0;
     }
    ul { margin: 1rem 0; padding: 1rem;}
    }
`;


class MyProjects extends React.Component {
    loadProjects = () => {
        return Object.keys(projects).map( (e) => {
            return (  
            <Project>
                <Icon name='github' size="30"/>
                <h2>{projects[e].name}</h2>
                <p>{projects[e].description}</p>
                <li>
                    <ul>{projects[e].tools.join(' ')}</ul>
                </li>
            </Project>)
        })
    }
    render() {
        return (
           <ProjectContainer>
              {this.loadProjects()}
           </ProjectContainer>
        )
    }
}

export default MyProjects;