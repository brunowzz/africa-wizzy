import styled from "styled-components";

export const Card = styled.div`
    width: 18.7rem;
    height: 23.7rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #0000001A;
    box-shadow: 0px 4px 4px 0px #00000040;

    
`
 
export const ClienteImg = styled.img`
    border: 5px solid #304F47; 
    border-radius: 50%;
    padding: 5px;
    margin-top: 29px;
    
`

export const Name = styled.h3`
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    margin-top: 16px;
`

export const Description = styled.p`
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: justify;
    color: #9A9AB0;
    padding: 16px 26px 80px 26px;
`
