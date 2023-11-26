import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body {
    background-color: ${({ theme }) => theme.COLORS.dark_400};
    color: ${({ theme }) => theme.COLORS.light_100};

    -webkit-font-smoothing: antialiased;
}
`