import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    > input {
        width: 316px;
        height: 48px;
        padding: 12px 14px;
        border: none;
        border-radius: 8px;

        color: ${({ theme }) => theme.COLORS.light_500};
        background: ${({ theme }) => theme.COLORS.dark_900};
        
    }  
`