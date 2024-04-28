import { useState } from 'react';

import { mockTravel } from '../../../../mocks/mockTravel.jsx';
import Card from '../../../../components/Card/index.jsx';

import * as S from './style.js';

export default function RowCard() {
    const [data, setData] = useState(mockTravel);

    return (
        <div>
            <S.RowCard>
                {data.map((item) => (
                    <Card
                        key={item.id}
                        image={item.img}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </S.RowCard>
        </div>
    )
}
