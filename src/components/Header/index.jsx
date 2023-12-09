import { Container } from "./styles";

import Polygon from "../../assets/Polygon.svg"
import HamburguerMenu from "../../assets/Menu.svg"
import Receipt from "../../assets/Receipt.svg"
import SignOut from "../../assets/SignOut.svg"
import Search from "../../assets/Search.svg"

import { Input} from "../Input"
import { Button } from './../Button';


export function Header() {
    return(
        <Container>
            <button><img className="HamburguerMenu" src={HamburguerMenu} typeof={Button} /></button>
            <div>
                <img className="Polygon" src={Polygon} alt="" />
                <p>food explorer</p>
                <Input className="Input" placeholder="Busque por pratos ou ingredientes" src={Search}/>
                <Button title="Pedidos (0)" src={Receipt} />
                <img className="SignOut" src={SignOut} />
            </div>
            <img className="Receipt" src={Receipt} alt="" />
        </Container>
    )
}