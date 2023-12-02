import styled from "styled-components";
import { SwiperSlide } from 'swiper/react';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 130px;

    .swiper-wrapper {
        gap: 45px;

        @media (min-width: 768px) {
            gap: 15px;
        }   
    }

    .swiper-button-next{
        display: none;
    }
    .swiper-button-prev{
        display: none;
    }

    .swiper-button- {
        display: none;
    }

        .mySwiper {

            @media (min-width: 768px) {
                width: 65%;
                    
                .swiper-button-next{
                    display: block;
                }
                .swiper-button-prev{
                    display: block;
                }

    }
}   
`

export const Banner = styled.div`
    display: flex;
    align-items: end;
    width: 376px;
    height: 120px;
    border-radius: 2.917px;
    margin-left: 20px;

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    @media (min-width: 768px) {
        width: 768px;
        height: 260px;
        margin-top: 164px;
    }
    @media (min-width: 1120px) {
        width: 1120px;
        height: 260px;
        margin-top: 164px;
    }

    > img {
        width: 191px;
        height: 149px;
        margin-left: -33px;

        @media (min-width:1120px) {
            width: 632px;
            height: 406px;
        }

        @media (min-width:768px) {
            width: 380px;
            height: 310px;
        }

        }

    > div {
        display: flex;
        flex-direction:column;
        gap: 3px;
        padding-bottom: 22px;

        > h2 {
            font-family: Poppins;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.light_300};

            @media (min-width:768px) {
                font-size: 35px;
        }

            @media (min-width:1120px) {
                    font-size: 40px;
            }
        }

        > p {
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.light_300};

            @media (min-width:768px) {
                font-size: 12px;
                margin-bottom: 60px;
            }
            @media (min-width:1120px) {
                    font-size: 16px;
                    margin-bottom: 60px;
            }
        }

    }  
`

export const Starter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding-left: 24px;
    
    > h3 {
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        margin-top: 62px;

        color: ${({ theme }) => theme.COLORS.light_300};

        @media (min-width: 768px) {
        margin-left: 300px;
    }

    }
    
`

export const Dessert = styled.div`
    width: 100vw;
    padding-left: 24px;

    > h3 {
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        margin-top: 24px;

        color: ${({ theme }) => theme.COLORS.light_300};

        @media (min-width: 768px) {
        margin-left: 300px;
    }
    }
`

export const Drinks = styled.div`
    width: 100vw;
    padding-left: 24px;

    > h3 {
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        margin-top: 24px;

        color: ${({ theme }) => theme.COLORS.light_300};

        @media (min-width: 768px) {
        margin-left: 300px;
    }
    }
`