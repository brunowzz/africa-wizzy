import styled from 'styled-components';

export const ContainerContent = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 6.25rem 5rem 6.25rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.5rem 0rem;
  gap: 4rem;
`;

export const ImgAll = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  flex: 1;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.005em;
  text-align: left;
  color: #515151;
  flex: 1;
`;

export const SubParagraph = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ParagraphEnd = styled.p`
  margin-bottom: 2.5rem;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.005em;
  text-align: left;
  color: #515151;
`;
