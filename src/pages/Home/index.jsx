import { Container, Banner, Starter, MainCourses, Dessert } from "./styles";
import photo from "../../assets/pngegg 2.png";
import pratro1 from "../../assets/Imagens - Food Explorer-v2/Mask group.png"

import { Card } from "../../components/Card"

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
                <div className="cards">
                    <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                    <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                    <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                    <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                </div>
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