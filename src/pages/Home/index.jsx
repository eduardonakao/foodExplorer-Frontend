import { Container, Banner } from "./styles";
import photo from "../../assets/pngegg 2.png";

export function Home() {
    return (
        <Container>
            <Banner>
                
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </Banner>
            <img src={photo} alt="" />
            
        </Container>
    )
}