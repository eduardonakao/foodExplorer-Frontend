import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    margin-top: 130px;

    > img {
        display: flex;
        width: 191px;
        height: 149px;
        position: absolute;
        margin-right: 245px;
        
    }

`

export const Banner = styled.div`
    justify-content: center;
    align-items: center;
    width: 376px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 2.917px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    > h2 {
        color: ${({ theme }) => theme.COLORS.light_300};
        font-family: Poppins;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        letter-spacing: 1px;
        padding: 36px 8px 3px 183px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.light_300};
        font-family: Poppins;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        padding: 0 8px 3px 183px;
    }
`