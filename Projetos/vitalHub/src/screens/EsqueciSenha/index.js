import { Container,ContainerLogin, IconBox } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title, Descricao } from "../../components/Title/style";
import { InputText } from "../../components/Input/style";
import { Button } from "../../components/Button/style";
import { BtnTitle } from "../../components/BtnTitle/style";
import { Ionicons } from '@expo/vector-icons';
export function EsqueciSenha(){


return(

<Container>
    <IconBox>
    <Ionicons name="arrow-back-circle-outline" size={30} color="#49B3BA" />
    </IconBox>

        <Logo
         source ={require('../../assets/VitalHub_Logo.png')}
         />

    <Title>Recuperar Senha</Title>

    <ContainerLogin>
    <Descricao>Digite abaixo seu email cadastrado que
         enviaremos um link para recuperação de senha</Descricao>
    </ContainerLogin>
    
    <InputText
     placeholder = {"Usuário ou E-mail"}
     placeholderTextColor = {"#49B3BA"}/>

     <Button>
        <BtnTitle>CONTINUAR</BtnTitle>
     </Button>
</Container>

)

}