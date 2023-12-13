import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .back {
        width: 100vw;
        display: flex;
        padding-left: 56px;
        flex-direction: row;
        align-items: center;

        > img {
            width: 28px;
            height: 28px;
        }

        > p {
            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
        }
    }

    > img {
        display: flex;
        width: 264px;
        height: 264px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        margin-block: 16px;
    }

    .infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-inline: 56px;
        gap: 24px;
        margin-bottom: 48px;


        > h2 {
            font-family: Poppins;
            font-size: 27.041px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
        }

        > p {
            text-align: center;
            font-family: Poppins;
            font-size: 16.225px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
        }

        .tags {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 024px;
            grid-row-gap: 024px;
        }
    }

    .stepper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 54px;

        > button {
            display: flex;
            width: 188px;
            height: 38px;
            padding: 12px 16.225px;
            justify-content: center;
            align-items: center;
            gap: 8px;

            text-align: center;
            font-family: Poppins;
            font-size: 9.464px;
            font-style: normal;
            font-weight: 500;
            line-height: 16.225px;

            > img {
                width: 21px;
                height: 21px;
            }
        }

        > img {
            width: 27px;
            height: 27px;
        }

        #text {
            font-family: Roboto;
            font-size: 22.626px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
        }
    }
`