
import styled from 'styled-components';
import NProgress from 'nprogress';
import React from 'react';
import 'nprogress/nprogress.css';
import Pdf from '../static/luis_castillo_resume .pdf';

const StyledHeader = styled.header`
    display:grid;
    grid-template-columns: 1fr auto;
`;
const Logo = styled.h1`
    font-size: 1.5rem;
    transform: skew(-11deg);
    align-self: center;
    a {
        padding: 1rem 2rem;
        background: ${props => props.theme.black};
        color:white;
    }

    @media (max-width: 700px) {
        font-size: 1.1rem; 
    }
    @media (max-width: 425px) {
        font-size: 0.8rem; 
    }
`;

const Resume = styled.h1`
    float: right;
    font-size: 1.3rem;
    align-self: center;
    a {
        padding: 0.8rem 2rem;  
        border-width: 3px;
        border-color: ${props => props.theme.green};
        border-style: solid;  
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }
    @media (max-width: 425px) {
        a {
            padding: 0.8rem 1rem;
        }
    }
     
`;


class Nav extends React.Component {
    componentWillMount () {
        NProgress.start()
    }   
    componentDidMount () {
        NProgress.done()
    }; 
    render() {

        return (
            <StyledHeader>   
            <Logo>
                <a href="/">CASTILLO</a>
            </Logo>
            <Resume>
                <a href={Pdf} target = "_blank" rel="noopener noreferrer"> Resume</a>
            </Resume>  
            </StyledHeader> 
        )
    }
}
export default Nav;