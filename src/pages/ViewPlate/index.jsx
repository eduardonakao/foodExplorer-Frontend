import { Container } from "./styles";

import Minus from "../../assets/Minus.svg"
import Plus from "../../assets/Plus.svg"
import CaretLeft from "../../assets/CaretLeft.svg"
import Receipt from "../../assets/Receipt.svg"

import { Header } from "../../components/Header";
import { Tags } from "../../components/Tags";
import { Button } from "../../components/Button";

import pratro1 from "../../assets/Imagens - Food Explorer-v2/Mask group.png"

export function ViewPlate ({ value, title }) {
    return (
        <Container>
            <Header />

            <div className="back">
                <img src={CaretLeft} />
                <p>Menu</p>
            </div>

            <img src={pratro1} alt="" />

            <div className="infos">

                <h2>Salada Ravanello</h2>

                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                <div className="tags">
                    <Tags text="alface"/>
                    <Tags text="alface"/>
                    <Tags text="alface"/>
                    <Tags text="alface"/>
                    <Tags text="alface"/>
                    <Tags text="alface"/>
                </div>

            </div>

            <div className="stepper">
                <img src={Minus} typeof="button" />
                {value = 1}
                <img src={Plus} typeof="button"/>

                <Button title="pedir - R$ 25,00" src={Receipt} />
            </div>

            

        </Container>
    )
}