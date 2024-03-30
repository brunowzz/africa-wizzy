import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
    width:21.875rem;
    background-color:#FFF;
    border:solid 0.0625rem #E1E1E1;
    border-radius:0.5rem;
`;

export const CardImage = styled.img`
    width:100%;
    height:19.375rem;
`;  

export const CardContent = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.8125rem;
    padding:0 4.375rem 2rem 0.875rem;

    h3{
        color:#11142D;
        font-weight:700;
        font-size:1.5rem;
        line-height:1.8rem;
        letter-spacing:0.5%;
    }

    p{
        height:6.25rem;
        color:#000;
        font-weight:400;
        font-size:1rem;
        line-height:1.25rem;
        letter-spacing:0.5%;
    }
    
    button{
        all:unset;
        display:flex;
        justify-content:center;
        align-items:center;
        width:7.3125rem;
        height:3.5rem;
        color:#FFF;
        background-color:#C7923E;
        font-weight:600;
        font-size:1rem;
        line-height:1.2rem;
        letter-spacing:0.5%;
        text-align:cnter;
        border-radius: 0.5rem;
        cursor:pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            opacity: 0.9;
        }

        &:active {
            transform: scale(0.95);
        }
    }
`;
