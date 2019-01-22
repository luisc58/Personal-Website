import React from 'react';
import styled from 'styled-components';

const SeparatorStyle = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr; 
    padding:  0 3rem;
    @media (max-width: 1100px) {
       padding: 2rem;
    } 
    @media (max-width: 480px) {
       padding: 0;
    } 
`;
 const Separator = (props) => (
   
    <SeparatorStyle>
        <h1>{props.name} <span>.</span> </h1>
    </SeparatorStyle>
);

export default Separator;