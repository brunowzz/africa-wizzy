import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 21.875rem;
  border: solid 0.0625rem #e1e1e1;
  border-radius: 0.5rem;
  background-color: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 19.375rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8125rem;
  padding: 0 4.375rem 2rem 0.875rem;

  h3 {
    color: #11142d;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.8rem;
    letter-spacing: 0.5%;
  }

  p {
    height: 6.25rem;
    color: #000;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.5%;
  }

  button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7.3125rem;
    height: 3.5rem;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: 0.5%;
    border-radius: 0.5rem;
    background-color: #c7923e;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
