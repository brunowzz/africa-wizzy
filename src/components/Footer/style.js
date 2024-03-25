import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 2rem 6.25rem 1rem 6.25rem;
    background-color: #304F47;
`;

export const Container = styled.section`
    display: flex;
    gap: 8.75rem;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 30.5rem;
    gap: 1.25rem;
`;

export const Title = styled.h1`
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: 700;
    color: #FFF;
`;

export const Text = styled.div`
    width: 24.75rem;
    font-size: 1.25rem;
    line-height: 1.6rem;
    font-weight: 300;
    color: #FFF;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    list-style-type: none;

    li a {
        color: #fff;
        text-decoration: underline;
    }
`;

export const Logo = styled.img`
    width: 6rem;
    height: 6rem;
`;

export const Section2 = styled.section`
    display: flex;
    flex-direction: column;
    width: 30.5rem;
    gap: 1.625rem;
    color: #FFF;
`;

export const TextEmail = styled.p`
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 300;
`;

export const Label = styled.label`
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
`;

export const FormEmail = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.4375rem;
        height: 3.5625rem;
        background-color: #C7923E;
        font-size: 1.25rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            transform: scale(0.95);
        }
    }
`;

export const Input = styled.input`
    width: 20.75rem;
    height: 3.5625rem;
    padding: 1.12rem;
    font-size: 1rem;
    background-color: #EFF2EF;
    border-radius: 8px;
    border: none;
    outline: none;
    
    &:focus {
        background-color: #FFF;
    }
`;

export const Copyright = styled.p`
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 100;
    color: #FFF;
`;
