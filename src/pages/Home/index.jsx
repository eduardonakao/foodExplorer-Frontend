import { Container, Banner, Starter, MainCourses, Dessert } from "./styles";
import photo from "../../assets/pngegg 2.png";

export function Home() {
    return (
        <Container>
            <Banner>
                    <img src={photo} alt="" />
                <div>
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
                
            </Banner>

            

            
            <Starter>
                <h3>Entradas</h3>
            </Starter>

            
            <MainCourses>
                <h3>Pratos Principais</h3>
            </MainCourses>
            
            
            <Dessert>
                <h3>Sobremesas</h3>
            </Dessert>

        </Container>
    )
}