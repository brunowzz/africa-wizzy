import * as S from './style'
import CustomIcon from '../../../../../../components/CustomIcon'

export default function CardTravel({ icon, description }) {
    return (
        <>
            <S.Card>
                <CustomIcon icon={icon} color='#fff' size={50} />
                <S.Description>{description}</S.Description>
            </S.Card>
        </>
    )
}







