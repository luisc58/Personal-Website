import styled from 'styled-components';

const Group = styled.div`
    
   h1{ margin: 0; font-size: 2.5rem;}
    p {
        margin-top: 0.8rem;
        font-size: 1.4rem; 
        opacity: 0.8;
        padding-right: 2rem; 
    }

    @media (max-width: 780px) {
        h1 { margin: 0; font-size: 2.1rem;}
        p { font-size: 1.3rem;}
    } 
    @media (max-width: 480px) {
        h1 { margin: 0; font-size: 1.8rem;}
        p { font-size: 1.2rem;}
    } 
`;

export default Group;