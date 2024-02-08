import { Container, IconBox } from "../../components/Container/style";
import { InputCode } from "../../components/Input/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { ContentInput } from "./style";
import { ContentAccount } from "../../components/Container/style";
import { LinkBold, LinkBlack } from "../../components/LinkMedium/style";
import { TextAccount } from "../../components/Title/style";
import { Button } from "../../components/Button/style";
import { BtnTitle } from "../../components/BtnTitle/style";
import { AntDesign } from '@expo/vector-icons';
export function VerificarEmail(){


    return(


        <Container>

        <IconBox>
            <AntDesign name="closecircleo" size={24} color="#49B3BA" />
        </IconBox>
        <Logo
         source ={require('../../assets/VitalHub_Logo.png')}
         />

            <Title>
                Verifique o seu Email
            </Title>
        
            <ContentAccount>
                 <TextAccount>Digite o código de 4 dígitos enviado para <LinkBold>username@email.com</LinkBold></TextAccount>
            </ContentAccount>

            <ContentInput>
            <InputCode
             placeholder = {"0"}
             placeholderTextColor = {"#49B3BA"}
             maxLength = {1}
             keyType = {"numeric"}
             editable = {true}
             keyboardType = "numeric"
             />
            <InputCode
             placeholder = {"0"}
             placeholderTextColor = {"#49B3BA"}
             maxLength = {1}
             keyType = {"numeric"}
             editable = {true}
             keyboardType = "numeric"
             />
            <InputCode
             placeholder = {"0"}
             placeholderTextColor = {"#49B3BA"}
             maxLenght = {1}
             keyType = {"numeric"}
             editable = {true}
             keyboardType = "numeric"
             />
            <InputCode
             placeholder = {"0"}
             placeholderTextColor = {"#49B3BA"}
             maxLenght = {1}
             keyType = {"numeric"}
             editable = {true}
             keyboardType = "numeric"
             />
            
            </ContentInput>
            
            <Button>
                <BtnTitle>ENTRAR</BtnTitle>
            </Button>
            <ContentAccount>
            <LinkBlack>Reenviar Código</LinkBlack>
            </ContentAccount>
            

        </Container>
    )
}