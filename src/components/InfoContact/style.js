import styled from 'styled-components';

export const ContainerLinks = styled.nav`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  gap: 1rem;
`;

export const LinkStyle = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: ${(props) => (props.dark ? '1rem' : '0.75rem')};
  font-weight: 400;
  color: ${(props) => (props.dark ? '#304F47' : '#fff')};
`;
