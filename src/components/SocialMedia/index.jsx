import * as S from './style'

import CustomIcon from '../CustomIcon'

export default function SocialMedia (dark){
    return(
        <S.ContainerSocialMedia>
            <S.ButtonSocialMedia>
            <CustomIcon icon={'facebook'} size={20} color={dark ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia>
            <S.ButtonSocialMedia>
            <CustomIcon icon={'twitter'} size={20} color={dark ? '#fff' : '#304F47'}/>
            </S.ButtonSocialMedia>
            <S.ButtonSocialMedia>
            <CustomIcon icon={'linkedin'} size={20} color={dark ? '#fff' : '#304F47'}/>
            </S.ButtonSocialMedia>
            <S.ButtonSocialMedia>
            <CustomIcon icon={'instagram'} size={20} color={dark ? '#fff' : '#304F47'}/>
            </S.ButtonSocialMedia>
        </S.ContainerSocialMedia>
    )
}