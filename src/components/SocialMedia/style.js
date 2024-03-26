import styled from "styled-components";

export const ContainerSocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${props => props.variant ? '0.5rem' : '0.9rem'};
`

export const ButtonSocialMedia = styled.button`
    background: transparent;
    border-radius: 50%;
    border: 2px solid ${props => props.variant ? '#fff' : '#304F47'};
    padding: auto ;
    width: ${props => props.variant ? '1.5rem' : '3.1rem'};
    height: ${props => props.variant ? '1.5rem' : '3.1rem'};  
`

