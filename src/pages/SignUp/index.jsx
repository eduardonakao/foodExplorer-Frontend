import { Container, Form, Header } from "./styles";
import { Link } from "react-router-dom";

import Polygon from "../../assets/Polygon.svg"

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
    return (
        <Container>
            <Header>

                <img src={Polygon} />
                <h1>food explorer</h1>
                
            </Header>
            <Form>
                
                <h2>Crie sua conta</h2>
                
                <p>Seu nome</p>
                <Input 
                    type="text"
                    placeholder="Exemplo: Maria da Silva"
                />

                <p>Email</p>
                <Input 
                    type="email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />

                <p>Senha</p>
                <Input
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                />

                <Button 
                    title="Criar conta"
                />

                <Link to="/">
                    <p>Já tenho uma conta</p>
                </Link>

            </Form>
        </Container>
        
    )
}