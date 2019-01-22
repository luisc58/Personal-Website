import React from 'react';
import StyledSection from './styles/SectionStyles';
import Group from './styles/Group';
import styled, {css} from 'styled-components';
 

let jobs =  {
    'Sprtlook': {
        'Position': 'Product Manager',
        'Company' : '@Sprtlook',
        'From' : 'March 2018 - Present',
        'DescriptionOne' :  "Managing and working in a team of five to develop Sprtlook’s MVP. Taking the project from a landing page" + 
                            "to a full-fledge web app in an agile development manner",
        'DescriptionTwo' : "Part of the Zahn Center Startup Accelerator, CUNY-ICORPS, Google and BNY Mellon Mentorship program.",
        'Tools' : "Mern Stack, Sketch, Trello, Gitflow"
    },
    
   'Wrkbook': {
        'Position': 'IOS Developer',
        'Company' : '@Wrkbook',
        'From' : 'Feb 2017 - June 2017',
        'DescriptionOne' :  "IOS application that makes finding jobs and skilled labor easy.",
        'DescriptionTwo' : "Part of the Zahn Center Startup Accelerator and winner of the Zahn center tech track competition",
        'Tools' : "SWIFT, Firebase, Sketch, Trello"
    },
    'Engineering For Kids': {
        'Position': 'Robotics instructor',
        'Company' : '@Engineering for kids',
        'From' : 'Oct 2016 - Mar 2017',
        'DescriptionOne' :  "Taught basic robotics using Legos and the scratch programming language to kids ranging from 12-14 years of age.",
        'DescriptionTwo' : "Taught 3D printing while creating exciting projects"+
        "Competed on various competitions sponsored by The Lego League",
        'Tools' : "Scracth, 3D printer"
    }
}




const JobContainer = styled.div`
    display: grid;
    grid-template-columns: 0.4fr auto;
    grid-column-gap: 2rem;
    height: 100%;
    @media (max-width: 580px) {
        grid-template-columns: auto;
        grid-row-gap: 2.5rem;
    }
`;

const Tablist = styled.div`
    /* background-color: red; */
    
`;

const JobList = styled.div`
    font-size: 1.4rem;
    h4,p {
        margin: 0rem;
    }
    .from {
        font-size: 1rem;
        padding: 0;
        opacity: 0.8;
    }
    .description {
        padding-top: 0.5rem;
        font-size: 1.2rem;
        opacity: 0.8;
    }
`;


const StyledButton = styled.button`
    display: inline-block;
    cursor: pointer;
    outline: none;
    font-weight: 700;
    width: 100%;
    height: 3rem;
    border: none;
    border-left: 2px solid rgb(51, 63, 88);
    background-color: transparent;
    ${props => props.active && css`
        border-left: 2px solid ${props => props.theme.green};
        color: ${props => props.theme.green};
        background-color: rgba(0, 0, 0, 0.03);
        
    `}
    padding-left: 1.5rem;
    text-decoration: none;
    text-align: left;
    white-space: nowrap;
`;


class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sprtlook'
        }
    } 

    handleClick = (e) => {
        this.setState({
            name: e.target.name
        })
    }

    loadButtons = () => {
        let val = Object.keys(jobs)
        return val.map( (a) => {
            return <StyledButton 
                        active={(String(a) === this.state.name) ? "true" : ""} 
                        key={a} name={a} onClick={this.handleClick}>{a}
                    </StyledButton>
        })
    }

    loadExperience = () => {
        return Object.keys(jobs).map( (e) => {
            if(this.state.name === String(e)) {
                return <JobList>
                            <h4> {jobs[e].Position} <span>{jobs[e].Company}</span></h4>
                            <p className="from">{jobs[e].From}</p>
                            <p className="description">{jobs[e].DescriptionOne}</p>
                            <p className="description">{jobs[e].DescriptionTwo}</p>
                            <p className="description"> <span>Tools: </span>{jobs[e].Tools}</p>
                        </JobList>
            }
        })
    }
    render() {
        return (
            <StyledSection>
            <Group>
                <h1>Where I've Worked <span>.</span></h1>
                <p> Besides working as a delivery guy, stock boy,
                    busboy, dishwasher, and construction worker, 
                    I’ve also worked here. </p>
            </Group>
    
            <JobContainer>
                <Tablist>
                    {this.loadButtons()}
                </Tablist>
                    {this.loadExperience()}
            </JobContainer>
        </StyledSection>
        )
    }
}

export default Experience;