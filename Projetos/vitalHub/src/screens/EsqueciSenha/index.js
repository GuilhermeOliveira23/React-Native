import { Container,ContentAccount } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title, Descricao } from "../../components/Title/style";
export function EsqueciSenha(){


return(

<Container>
<Logo
         source ={require('../../assets/VitalHub_Logo.png')}
         />

    <Title>Recuperar Senha</Title>
    
    <Descricao>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Descricao>
    
</Container>

)

}