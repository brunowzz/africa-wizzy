import HeroBackground from '../../assets/hero.svg';

import styled from 'styled-components';

export const ContainerHero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height:29.125rem;
  background: url(${HeroBackground});
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 44.75rem;
  }

  h2 {
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.00625rem;
    color: #fff;
  }
`;
