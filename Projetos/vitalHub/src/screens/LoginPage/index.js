import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { InputText } from "../../components/Input"
import { LinkMedium } from "../../components/LinkMedium"

export function LoginPage()  {
return(
    <Container>
         <Logo
         source ={require('../../assets/VitalHub_Logo.png')}
         />
         
         
        <Title>Entrar ou criar conta</Title>
        
        <InputText placeholder = {"Usuário ou Email"}
        placeholderTextColor = {"#49B3BA"}/>
        <InputText placeholder = {"Senha"}
        placeholderTextColor = {"#49B3BA"}/>
        
        <LinkMedium>Esqueceu sua senha?</LinkMedium>
        {/*
        <Button>
            <BtnTitle>Entrar</BtnTitle>
        </Button>

        <ButtonGoogle>
            <BtnTitle>Entrar com Google</BtnTitle>
        </ButtonGoogle>

        <TextAccount>
            <ContentAccount>Não tem conta? Crie uma conta agora!</ContentAccount>
        </TextAccount>
             */}

    </Container>

)

}