import * as S from './style.js';

import PropTypes from 'prop-types';

export default function Card({ image, title, text }) {
    return (
        <>
            <S.Card>
                <S.CardImage src={image} alt="" />
                <S.CardContent>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <button>Learn More</button>
                </S.CardContent>
            </S.Card>
        </>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
