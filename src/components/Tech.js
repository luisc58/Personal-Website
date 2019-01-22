import React from 'react';
import StyledSection from './styles/SectionStyles';
import Group from './styles/Group';
import styled from 'styled-components';


const GroupTwo = styled.div`
    background-color: ${props => props.theme.blue}; 
    @media (max-width: 520px) {
        background-color: white;    
       
    }
`;
const TableStyle = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
    padding: 3rem;
    transform: translate(-4%, 10%);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5,1fr);
    grid-column-gap: 1rem;
    text-align: center;

    div {
        font-size: 1.1rem;
        padding: 0.6rem;
        color: white;
    }
    @media (max-width: 780px) {
        transform: 0;
        grid-column-gap: 0;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5,1fr);    
    } 

    @media (max-width: 520px) {
        transform: 0;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5,1fr);    
    } 
    @media (max-width: 430px) {
        grid-column-gap: 0.7rem;
        margin: 0 1rem;
        padding: 1rem 2rem;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5,1fr);    
    } 
`;
const Tech = () => (
    <StyledSection>
        <Group>
            <h1>Here's a few things I'm experienced with <span>.</span></h1>
            <p> I love learning new technologies</p>
        </Group>
        <GroupTwo>
            <TableStyle>
                <div><span>Javascript</span></div>
                <div>Express</div>
                <div>MongoDb</div>
                <div>Sketch</div>
                
                <div>HTML & CSS</div>
                <div>Gitflow</div>
                <div>GraphQL</div>
                <div>Photoshop</div>
                
                <div>ReactJS</div>
                <div>Java</div>
                <div>Apollo</div>
                <div>Latex</div>
                
                <div>Nodejs</div>
                <div>Python</div>
                <div>Prisma</div>

                <div>NextJS</div>
                <div>Swift</div>
                <div>SQL</div>
            </TableStyle>
        </GroupTwo>
    </StyledSection>
);

export default Tech;