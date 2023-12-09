import styled from "styled-components";

export const Container = styled.div`
    
    > button {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.light_100};
        border: none;
        font-size: 24px;
        font-family: Poppins;
        font-weight: 300;
        cursor: pointer;
    }
`