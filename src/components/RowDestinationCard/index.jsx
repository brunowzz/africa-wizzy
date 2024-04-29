import { useState } from 'react';

import { MockDestinations } from '../../mocks/MockDestinations.jsx';
import DestinationCard from '../DestinationCard/index.jsx';

import * as S from './style.js';

export default function RowDestinationCard() {

    const [data, setData] = useState(MockDestinations);

    return (
        <S.ContainerCard>
            {data.map((item) => (
                <DestinationCard
                    key={item.id}
                    image={item.img}
                    title={item.title}
                    text={item.text}
                />
            ))}
        </S.ContainerCard>
    );
}
