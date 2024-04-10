import * as S from './style'
import Subtitle from "../../../../components/Subtitle"
import CardClient from "./components/CardClient"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



export default function FeedbackSection(){
    return(
            <S.SectionContainer>
               <Subtitle subtitle='Our Traveller Say' instructionSubtitle='What our clients say about us'/> 
            <S.ContainerSwiper>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay:8000,
                        disableOnInteraction: false,
                    }}
                    className='swiper'
                >
                    <SwiperSlide className='slideSwiper'><CardClient /></SwiperSlide>
                    <SwiperSlide className='slideSwiper'><CardClient /></SwiperSlide>
                    <SwiperSlide className='slideSwiper'><CardClient /></SwiperSlide>
                    <SwiperSlide className='slideSwiper'><CardClient /></SwiperSlide>
                </Swiper>
            </S.ContainerSwiper>
            </S.SectionContainer>
        )
}