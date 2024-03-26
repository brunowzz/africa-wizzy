import * as S from './style'

import CustomIcon from '../CustomIcon'

export default function SocialMedia (variant, custom){
    return(
        <S.ContainerSocialMedia variant={variant}>
            <S.ButtonSocialMedia variant={variant} >
                <CustomIcon icon={'facebook'} size={custom ? 10 : 22} color={custom ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia >
            <S.ButtonSocialMedia variant={variant}>
                <CustomIcon icon={'twitter'} size={custom ? 10 : 22} color={custom ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia>
            <S.ButtonSocialMedia variant={variant}>
                <CustomIcon icon={'linkedin'} size={custom ? 10 : 22} color={custom ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia>
            <S.ButtonSocialMedia variant={variant}>
                <CustomIcon icon={'instagram'} size={custom ? 10 : 22} color={custom ? '#fff' : '#304F47'} />
            </S.ButtonSocialMedia>
        </S.ContainerSocialMedia>
    )
}