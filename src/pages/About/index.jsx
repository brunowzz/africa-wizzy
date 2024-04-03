import Title from '../../components/Title';
import ImgChale from '../../assets/africa-wizzy-chale.svg';
import ImgMountain from '../../assets/africa-wizzy-mountain.svg';
import ImgLake from '../../assets/africa-wizzy-lake.svg';
import * as S from './style';

export default function About() {
  return (
    <main>
      <S.ContainerContent /*Container de conteudo */>
        <Title dark>Welcome to Africa Wizzy Safari</Title>

        <S.Content /*Conteudo */>
          <S.ImgAll src={ImgChale} alt="Img Chale" />

          <S.Paragraph>
            Welcome to Africa Wizzy Safari, a leading tourism company based in
            Rwanda. We have been in business for over 5 years and are committed
            to providing top-quality tours and services to our clients. Our
            mission is to showcase the beauty and culture of Rwanda to visitors
            from around the world, and to contribute to the sustainable
            development of the country through responsible tourism practices.
          </S.Paragraph>
        </S.Content>

        <S.Content /*Conteudo */>
          <S.Paragraph>
            At Africa Wizzy safari, we offer a wide range of tours and
            activities, including cultural and historical tours, wildlife
            safaris, mountain gorilla trekking, and more. Our experienced and
            knowledgeable guides will ensure that you have a safe and enjoyable
            experience while exploring the stunning landscapes and rich culture
            of Rwanda.
          </S.Paragraph>

          <S.ImgAll src={ImgMountain} alt="Img Mountain" />
        </S.Content>

        <S.Content /*Conteudo */>
          <S.ImgAll src={ImgLake} alt="Img Lake" />

          <S.SubParagraph /*Segundo tipo de paragrafo */>
            <S.ParagraphEnd /*Paragrafos finais da pagina */>
              We are proud to have received numerous awards and accolades for
              our commitment to excellence, including the RDD award and the
              Excellence award.
            </S.ParagraphEnd>

            <S.Paragraph>
              Thank you for choosing Africa Wizzy Safari for your travel needs
              in Rwanda. We look forward to welcoming you on one of our tours
              soon!
            </S.Paragraph>
          </S.SubParagraph>
        </S.Content>
      </S.ContainerContent>
    </main>
  );
}
