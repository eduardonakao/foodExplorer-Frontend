import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 130px;
`

export const Banner = styled.div`
    display: flex;
    align-items: end;
    width: 376px;
    height: 120px;
    border-radius: 2.917px;

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    > img {
        width: 191px;
        height: 149px;
        margin-left: -33px;
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
        }

        > p {
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;

            color: ${({ theme }) => theme.COLORS.light_300};
         }

    }

    
`

export const Starter = styled.div`
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
    }
`

export const MainCourses = styled.div`
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
    }
`