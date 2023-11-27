import { Container } from "./styles";
import Vector from "../../assets/Vector.svg"
import Minus from "../../assets/Minus.svg"
import Plus from "../../assets/Plus.svg"


export function Card({name, price, value, ...rest}) {
    return(
        <Container>
            <img src={Vector} />
            <img {...rest} />

            <p>{name}</p>
            <span>R$ {price}</span>

            <div className="stepper">
                <img src={Minus} typeof="button" />
                {value}
                <img src={Plus} typeof="button"/>
            </div>

            <button>
                incluir
            </button>
        </Container>
    )
}