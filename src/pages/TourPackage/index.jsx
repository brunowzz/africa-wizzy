import Subtitle from '../../components/Subtitle/index.jsx';
import RowCard from './components/RowCard/index.jsx';

import * as S from './style.js';

export default function TourPackage({ inHome }) {
  return (
    <S.ContainerTourPackage>
      <Subtitle
        subtitle="Choose your Package"
        instructionSubtitle="Select your Best Package for your Travel"
      />

      <S.ContainerCard>
        {inHome ? (
          <>
            <RowCard />
            <RowCard />
          </>
        ) : (
          <>
            <RowCard />
            <RowCard />
            <RowCard />
          </>
        )}

      </S.ContainerCard>
    </S.ContainerTourPackage>
  );
}
