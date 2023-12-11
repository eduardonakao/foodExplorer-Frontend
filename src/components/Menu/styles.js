import styled from "styled-components";

export const Container = styled.header`
    .header {
        display: flex;
        align-items: center;
        padding: 56px 28px 24px ;
        width: 100vw;
        height: 114px;
        gap: 16px;
    
        background-color: ${({theme}) => theme.COLORS.dark_700};
    
        >img {
            width: 18px;
        }
    
        > p {
            font-family: Roboto;
            font-size: 21.163px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    .content {
        margin: 36px 28px ;

        > div { 
            align-items: center;
            > img {
                margin-left: 19px;
                position: absolute;
            }
            
            input {
                width: 100%;
                padding-left: 60px;
            }
        }

        > div:nth-child(2) {
            margin-top: 46px;
            border-bottom: 1px solid #192227;
        }
    }
`