import { Container } from "./styles";

export function TextButton({ text }) {
    return (
        <Container>
            <button>
                {text}
            </button>
            
        </Container>
    )
}