import styled from "styled-components";

export const ContainerSocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const ButtonSocialMedia = styled.button`
    background: transparent;
    border-radius: 50%;
    border: 2px solid ${props => props.arc ? '#fff' : '#304F47'};
    padding: .25em .5em  ;
    
`

