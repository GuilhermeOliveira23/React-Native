import { Container, ContentAccount } from "../../components/Container/style"
import { Logo} from "../../components/Logo/style"
import { Title, TextAccount} from "../../components/Title/style"
import { InputText } from "../../components/Input/style"
import { LinkMedium,LinkBold } from "../../components/LinkMedium/style"
import { BtnTitle, BtnTitleGoogle } from "../../components/BtnTitle/style"
import { Linking } from "react-native"
import { Button } from "../../components/Button/style"
import { ButtonGoogle } from "../../components/ButtonGoogle/style"
import { AntDesign } from '@expo/vector-icons';



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
        
        <LinkMedium onPress = {() => {
            Linking.openURL('http://google.com')}
            
            }>Esqueceu sua senha?</LinkMedium>
        
        
        <Button>
           
            <BtnTitle>ENTRAR</BtnTitle>
            
        </Button>

        <ButtonGoogle>
        <AntDesign name="google" size={24} color="#496BBA" />
            <BtnTitleGoogle>ENTRAR COM GOOGLE</BtnTitleGoogle>
        </ButtonGoogle>
            
<ContentAccount>
    <TextAccount>Não tem conta?  <LinkBold>Crie uma agora!</LinkBold></TextAccount>
    
    
    
</ContentAccount>
        
            

    </Container>

)

}