import styled from "styled-components";

export const Container = styled.div `
    display: inline-flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.dark_1000};

    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`