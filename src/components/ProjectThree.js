import React from 'react';
import StyledSection from './styles/SectionStyles';
import Group from './styles/Group';
import styled from 'styled-components';


const ImageContainer = styled.div`
    background-color: rgba(74,144,226,0.1);
    height: 33rem;
    overflow-y: auto;

    img {
        height: 25rem;
        width: 95%;
    }
    @media (max-width: 1100px) {
        height: 30rem;
        img {
        height: 25rem;
        width: 70%;
    }
    @media (max-width: 750px) {
        height: 25rem;
        img {
        height: 25rem;
        width: 100%;
    }
    @media (max-width: 580px) {
        img {
        height: 20rem;
        width: 100%;
    }
    @media (max-width: 480px) {
        height: 25rem;
        img {
        height: 20rem;
        width: 95%;
    }
    }
`;

const Image = styled.div`
    text-align: center;
    padding-top:2rem;
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
const ProjectThree = () => (
    <StyledSection>
        <Group>
            <h1>Fullstack NodeJS restaurant application</h1>
            <GroupTwo>
                <h4>Personal <br /> <span>2017</span></h4>
            </GroupTwo>
        </Group>
        <ImageContainer>
            <Image>
                <img src={require('../static/dang.png')} alt="Dang"/>
                
            </Image>
        </ImageContainer>
    </StyledSection>
);

export default ProjectThree;