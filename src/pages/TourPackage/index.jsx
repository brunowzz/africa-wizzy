import Subtitle from '../../components/Subtitle/index.jsx';
import Hero from '../../components/Hero/index.jsx';
import RowDestinationCard from '../../components/RowDestinationCard/index.jsx';

import * as S from './style.js';

export default function TourPackage({inHome = false}) {

  return (
    <>
      {inHome === false && (
        <Hero />
      )}

      <S.ContainerTourPackage>
        <Subtitle
          subtitle="Choose your Package"
          instructionSubtitle="Select your Best Package for your Travel"
        />

        <S.ContainerCards>
          {inHome ? (
            <>
              <RowDestinationCard />
              <RowDestinationCard />
            </>
          ) : (
            <>
              <RowDestinationCard />
              <RowDestinationCard />
              <RowDestinationCard />
            </>
          )}
        </S.ContainerCards>
      </S.ContainerTourPackage>
    </>
  );
}
