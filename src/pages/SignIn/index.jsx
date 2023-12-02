import { Container, Form, Header } from "./styles";
import { Link } from "react-router-dom";

import Polygon from "../../assets/Polygon.svg"

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
    return (
        <Container>
            <Header>

                <img src={Polygon} />
                <h1>food explorer</h1>
                
            </Header>
            
            <Form>

                <h2>Faça login</h2>

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
                    title="Entrar"
                />

                <Link to="/register">
                    <p>Criar uma conta</p>
                </Link>
                
            </Form>
        </Container>
        
    )
}