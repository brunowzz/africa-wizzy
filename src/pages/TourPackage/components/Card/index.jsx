
import * as S from './style.js';

export default function Card({image, title, text}) {


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
    )
}