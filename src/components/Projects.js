import React from 'react';
import StyledSection from './styles/SectionStyles';
import Group from './styles/Group';
import styled from 'styled-components';


const ImageContainer = styled.div`
    background-color: rgba(74,144,226,0.1);
    height: 33rem;
    overflow-y: auto;
`;

const Image = styled.div`
    text-align: center;
    padding-top:2rem;
    img {
        height: 70rem;
        width: 95%;
    }
    @media (max-width: 750px) {
        text-align: none;
        img {
        height: 80rem;
        width: 100%;
    }
    @media (max-width: 580px) {
        img {
        height: 60rem;
        width: 100%;
    }
    @media (max-width: 480px) {
        
        img {
        height: 40rem;
        width: 100%;
    }
    }
`;
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
const Projects = () => (
    <StyledSection>
        <Group>
            <h1>A web application that
                connects Athletes with
                college coaches</h1>
            <GroupTwo>
                <h4>Personal <br /> <span>2018</span></h4>
            </GroupTwo>
        </Group>
        <ImageContainer>
            <Image>
                <img src={require('../static/sprtlook-1.svg')} alt="Sprtlook"/>   
            </Image>
        </ImageContainer>
    </StyledSection>
);

export default Projects;