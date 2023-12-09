import { Container } from "./styles"

export function Button({ title, ...rest }) {
    return (
        <Container>
            <img {...rest} />
            {title}
        </Container>
    )
}