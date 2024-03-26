import * as S from './style'

import CustomIcon from '../CustomIcon'

export default function SocialMedia (custom){
    return(
        <S.ContainerSocialMedia custom={custom}>
            <S.ButtonSocialMedia custom={custom} >
                <CustomIcon icon={'facebook'} size={custom ? 10 : 22} color={custom ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia >
            <S.ButtonSocialMedia custom={custom}>
                <CustomIcon icon={'twitter'} size={custom ? 10 : 22} color={custom ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia>
            <S.ButtonSocialMedia custom={custom}>
                <CustomIcon icon={'linkedin'} size={custom ? 10 : 22} color={custom ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia>
            <S.ButtonSocialMedia custom={custom}>
                <CustomIcon icon={'instagram'} size={custom ? 10 : 22} color={custom ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia>
        </S.ContainerSocialMedia>
    )
}