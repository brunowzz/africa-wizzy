import * as S from './style'
import client from '../../../../../../assets/client.svg'

export default function CardClient(){
    return(
        <S.Card>
            
            <S.ClienteImg src={client} alt='Foto Cliente'/>
            <S.Name>Emma Waston</S.Name>
            <S.Description>I recently went on a tour with XYZ Tourism Company and was extremely 
                impressed with the level of professionalism and organization.</S.Description>
        </S.Card>
    )
} 