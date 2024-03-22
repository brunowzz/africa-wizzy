import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction:column;
    align-items:center;
    gap:2.5rem;
    padding:2rem 6.25rem 1rem 6.25rem;
    background-color:#304F47;
    
`;

export const Container = styled.section`
    display:flex;
    gap:8.75rem;
    
`;

export const Section = styled.section`
    display:flex;
    flex-direction: column;
    gap:1.25rem;
    width:30.5rem;
`;

export const Title = styled.h1`
    color:#FFF;
    font-size: 2.4rem;
    font-weight:700;
    line-height:3rem;
`;

export const Text = styled.div`
    width:24.75rem;
    color:#FFF;
    font-size: 1.25rem;
    font-weight:300;
    line-height:1.6rem;
`;

export const List = styled.ul`
    display:flex;
    flex-direction:column;
    gap:0.25rem;
    list-style-type: none;

    li a{
        color: #fff;
        text-decoration: underline;
    }
`;

export const Logo = styled.img`
    width: 6rem;
    height: 6rem;
`;

export const Section2 = styled.section`
    display:flex;
    flex-direction: column;
    gap:1.625rem;
    width:30.5rem;
    color:#FFF;
`;

export const TextEmail = styled.p`
    font-size:1rem;
    font-weight:300;
    line-height:1rem;
`;

export const Label = styled.label`
    font-size:1.25rem;
    font-weight:700;
    line-height:1.5rem;
`;

export const InputArea = styled.div`
    display:flex;
    align-items:center;
    gap:1rem;

    div{
        display:flex;
        align-items:center;
        justify-content:center;
        width:3.4375rem;
        height:3.5625rem;
        background-color:#C7923E;
        font-size: 1.25rem;
        border-radius:0.5rem;
        cursor:pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            opacity: 0.8;
        }
    }
`;

export const Input = styled.input`
    width:20.75rem;
    height:3.5625rem;
    padding:1.12rem;
    font-size:1rem;
    background-color:#FFF;
    border-radius:8px;
    border:none;
`;

export const Copyright = styled.p`
    color:#FFF;
    font-weight:100;
    font-size:1rem;
    line-height:1.25rem;
    
`;