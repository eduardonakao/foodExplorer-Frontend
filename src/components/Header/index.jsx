import { Container } from "./styles";

import Polygon from "../../assets/Polygon.svg"
import HamburguerMenu from "../../assets/Menu.svg"
import Receipt from "../../assets/Receipt.svg"

export function Header() {
    return(
        <Container>
            <img className="HamburguerMenu" src={HamburguerMenu} alt="" />
            <div>
                <img className="Polygon" src={Polygon} alt="" />
                <p>food explorer</p>
            </div>
            <img className="Receipt" src={Receipt} alt="" />
        </Container>
    )
}