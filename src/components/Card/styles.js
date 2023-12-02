import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 210px;
    height: 292px;
    margin-top: 24px;

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.dark_300};
    background: ${({ theme }) => theme.COLORS.dark_200};

    > img:first-child {
        width: 24px;
        height: 22px;
        margin-left: 150px;
    }

    > img:nth-child(2) {
        width: 88px;
        height: 88px;
    }

    > p {
        text-align: center;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        margin-top: 12px;

        color: ${({ theme }) => theme.COLORS.light_300};
    }

    > span {
        text-align: center;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        margin-top: 12px;

        color: ${({ theme }) => theme.COLORS.tints_cake_200};
    }

    .stepper {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100px;
        height: 32px;
        margin-top: 12px;

    }

    > button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 162px;
        height: 32px;
        padding: 12px 24px;
        margin-top: 16px;
        border-radius: 5px;
        border: none;

        background: ${({ theme }) => theme.COLORS.tints_tomato_100};
        color: ${({ theme }) => theme.COLORS.light_100};
    }
`