import styled from 'styled-components';

const StyledSection = styled.section`
    display:grid;
    grid-column-gap:6rem;
    grid-template-columns: 1fr 1fr;
    padding:  8rem 3rem;
    margin: 0 auto;

    @media (max-width: 1100px) {
        grid-template-columns: auto;
        padding:  6rem 2rem;
    }
    @media (max-width: 525px) {
        grid-template-columns: auto;
        padding:  5rem 0rem;
    } 
    
`;

export default StyledSection;

