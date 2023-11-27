import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 316px;
    height: 48px;
    padding: 12px 32px;
    border-radius: 5px;
    border: none;

    background: ${({ theme }) => theme.COLORS.tints_tomato_100};
    color: ${({ theme }) => theme.COLORS.light_100};
`