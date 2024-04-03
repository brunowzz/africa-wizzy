import { useState } from 'react';
import * as S from './style';
import Subtitle from '../../../../components/Subtitle';
import CardTravel from './components/CardTravel';

const dados = [
    {
        id: 1,
        name: 'car',
        text: '100+ tours around Rwanda'
    },
    {
        id: 2,
        name: 'check',
        text: '100% Trusted travel agency'
    },
    {
        id: 3,
        name: 'calendar',
        text: '10 years of travel experience'
    },
    {
        id: 4,
        name: 'like',
        text: '90% of travelors are happy'
    }

];

export default function TravelSection(){
    const [data, setData] = useState(dados);

    return(
        <S.SectionTravel>
            <Subtitle subtitle='Why us?'
                instructionSubtitle='Why Travel with Africa wizzy Safari' />
            <S.ContainerCard>
                {data.map((dado) => (
                    <CardTravel key={dado.id} icon={dado.name} description={dado.text} />
                ))}
            </S.ContainerCard>
        </S.SectionTravel>
    )
}