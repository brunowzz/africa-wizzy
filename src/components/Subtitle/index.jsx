import PropTypes from 'prop-types';

import * as S from './style';

export default function Subtitle({ subtitle, instructionSubtitle, FontSize, Color, Width}) {
    return (
        <>
            <S.ContainerSubtitle>
                <S.Box style={{width: Width}}>
                    <S.Subtitle>{subtitle}</S.Subtitle>
                    <S.Instruction style={{fontSize: FontSize, color: Color}} >{instructionSubtitle}</S.Instruction>
                </S.Box>
            </S.ContainerSubtitle>
        </>
    )
}

Subtitle.propTypes = {
    subtitle: PropTypes.string,
    instructionSubtitle: PropTypes.string.isRequired,
    FontSize: PropTypes.string,
    Color: PropTypes.string,
    Width: PropTypes.string,
};
