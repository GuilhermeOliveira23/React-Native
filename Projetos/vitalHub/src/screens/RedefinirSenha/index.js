import { BtnTitle } from "../../components/BtnTitle/style";
import { Button } from "../../components/Button/style";
import { Container, IconBox } from "../../components/Container/style";
import { InputText } from "../../components/Input/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { AntDesign } from '@expo/vector-icons';

export function RedefinirSenha(){


    return(
        <Container>
            <IconBox>
            <AntDesign name="closecircleo" size={24} color="#49B3BA" />
            </IconBox>
        <Logo
        source ={require('../../assets/VitalHub_Logo.png')}
        />
        <Title>Redefinir Senha</Title>
        <InputText
        placeholder = {"Nova senha"}
        placeholderTextColor = {"#49B3BA"}
        maxLength = {50}
        />
        <InputText
        placeholder = {"Confirmar nova senha"}
        placeholderTextColor = {"#49B3BA"}
        maxLength = {50}
        />

        <Button>
            <BtnTitle>CONFIRMAR NOVA SENHA</BtnTitle>
        </Button>
        </Container>
        


    )
}