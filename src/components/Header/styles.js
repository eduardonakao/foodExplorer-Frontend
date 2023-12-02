import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 28px;

    width: 100vw;
    height: 114px;

    background-color: ${({theme}) => theme.COLORS.dark_700};

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        > p {
            color: ${({theme}) => theme.COLORS.light_100};
            font-family: Roboto;
            font-size: 21.163px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
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
    }
`