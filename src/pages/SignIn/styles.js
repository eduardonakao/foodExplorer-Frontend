import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    padding: 158px 47px 235px 65px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
    background-color: ${({ theme }) => theme.COLORS.dark_400};

    @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const Header = styled.div`
    display: flex;
    gap: 10.73px;
    margin-bottom: 73px;
    

    > h1 {
        font-size: 37.243px;
        font-family: Roboto;
        font-style: bold;
        font-weight: 700;
    }

    color: ${({ theme }) => theme.COLORS.light_100};
`

export const Form = styled.form`

    > h2 {
        text-align: center;
        font-family: Poppins;
        font-size: 32px;
        font-style: medium;
        font-weight: 500;
        margin-bottom: 32px;
        display: none;
        
        color: ${({ theme }) => theme.COLORS.light_100};

        @media (min-width: 768px) {
            display: block;
        }
    }

    > p {
        font-family: Roboto;
        font-size: 16px;
        font-style: small;
        font-weight: 400;
        margin-bottom: 8px;
        

        color: ${({ theme }) => theme.COLORS.light_400};
    }

    > div {
        margin-bottom: 32px;
    }

    > a {
        display: flex;
        margin-top: 32px;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            
        > p {
            color: ${({ theme }) => theme.COLORS.light_100};
            font-family: Poppins;
            font-size: 14px;
            font-style: medium;
            font-weight: 500;
        }
    }
`