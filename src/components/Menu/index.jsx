import { Container } from "./styles";

import Close from "../../assets/Close.svg"
import Search from "../../assets/Search.svg"

import { Input } from "../Input"
import { TextButton } from "../TextButton"

export function Menu() {

    function handleClick() {
        document.getElementById("menu").classList.toggle("hide");
        document.getElementById("home").classList.toggle("hide");
    }

    return(
        <Container>
                <div className="header">
                    <img src={Close} onClick={handleClick} />
                    <p>Menu</p>
                </div>

                <div className="content">
                    <Input placeholder="Busque por pratos ou ingredientes" src={Search}/>

                    <TextButton text="Sair"/>
                </div>
        </Container>
    )
}