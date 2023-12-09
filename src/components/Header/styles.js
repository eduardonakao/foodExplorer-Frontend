import styled from "styled-components";




export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 28px;

    width: 100vw;
    height: 114px;

    background-color: ${({theme}) => theme.COLORS.dark_700};

    > div {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        > p {
            color: ${({theme}) => theme.COLORS.light_100};
            font-family: Roboto;
            font-size: 21.163px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-left: 8px;
        }
        > div {
            align-items: center;

            > img {
                margin-left: 190px;
                position: absolute;
            }

            > input {
                width: 581px;
                height: 48px;
                padding-inline: 187px;
                margin-inline: 32px;
                
    
                @media (max-width: 768px) {
                    display: none;
                }
            }
        }


        > Button {
            width: 216px;
            height: 56px;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .SignOut {
            margin-left: 32px;
            cursor: pointer;

            @media (max-width: 768px) {
                display: none;
            }
        }

    }

    > button {
        background: transparent;
        border: none;
        width: 24px;

        @media (min-width: 768px) {
            display: none;
        }   
    }
    
    .HamburguerMenu {
        width: 24px;
    }

    .Polygon {
        width: 24.61px;
    }

    .Receipt {
        width: 24px;
        
        @media (min-width: 768px) {
            display: none;
        }
    }
`