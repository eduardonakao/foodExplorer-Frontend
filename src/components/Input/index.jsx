import { Container } from "./styles";

export function Input({ ...rest }) {
    return (
        <Container>
            <img {...rest} />
            <input  {...rest}/>
        </Container>
    )
}