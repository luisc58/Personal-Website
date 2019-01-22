import React from 'react';
import StyledSection from './styles/SectionStyles';
import Group from './styles/Group';
import styled from 'styled-components';

const GroupTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    h4{ 
        border-top: 2px solid ${props => props.theme.blue};
        padding-top: 1rem;
    }
    span {
        font-size: 1.1rem;
        color: #000;
        opacity: 0.6;
    }
`;

const Video = styled.div`
    text-align: center;
    padding-top:2rem;
    video {
        height: 25rem;  
    }
`;

const GifContainer = styled.div`
     background-color: rgba(218,82,82,0.1);
     height: 30rem;
     @media (max-width: 750px) {
        height: 30rem;  
        video {
        height: 25rem;
    }
    @media (max-width: 650px) {
        height: 25rem;  
        video {
        height: 20rem;
        }
    @media (max-width: 450px) {
        height: 21rem;  
        video {
        height: 14rem;
    }
`;

const ProjectTwo = () => (
    <StyledSection>
        <Group>
            <h1>A Online Store with React and GraphQL</h1>
            <GroupTwo>
                <h4>Personal <br /> <span>2018</span></h4>
            </GroupTwo>
        </Group>
        <GifContainer>
            <Video>
                <video playsinline="" poster="https://res.cloudinary.com/wesbos/image/upload/f_auto,q_auto/v1539136514/ARG/poster-desktop.png" src={require("../static/ProjectTwo.mp4")} 
                muted="" autoplay="1" loop="" data-video="1"></video>
            </Video>
        
        </GifContainer>
    </StyledSection>
);

export default ProjectTwo;