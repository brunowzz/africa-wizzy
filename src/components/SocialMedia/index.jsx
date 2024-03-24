import * as S from './style'

import CustomIcon from '../CustomIcon'

export default function SocialMedia (dark, arc, size){
    return(
        <S.ContainerSocialMedia>
            <S.ButtonSocialMedia arc={arc}>
            <CustomIcon icon={'facebook'} size={size ? 24 : 15} color={dark ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia >
            <S.ButtonSocialMedia arc={arc}>
            <CustomIcon icon={'twitter'} size={size ? 24 : 15} color={dark ? '#fff' : '#304F47'}/>
            </S.ButtonSocialMedia>
            <S.ButtonSocialMedia arc={arc}>
            <CustomIcon icon={'linkedin'} size={size ? 24 : 15} color={dark ? '#fff' : '#304F47'}/>
            </S.ButtonSocialMedia>
            <S.ButtonSocialMedia arc={arc}>
            <CustomIcon icon={'instagram'} size={size ? 24 : 15} color={dark ? '#fff' : '#304F47'}/>
            </S.ButtonSocialMedia>
        </S.ContainerSocialMedia>
    )
}