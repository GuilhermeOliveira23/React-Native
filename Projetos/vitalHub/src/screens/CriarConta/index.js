import { BtnTitle } from '../../components/BtnTitle/style';
import { Button } from '../../components/Button/style';
import { ContainerCadastro, ContentAccount, IconBox } from '../../components/Container/style';
import { InputText } from '../../components/Input/style';
import { LinkBlack } from '../../components/LinkMedium/style';
import { Logo } from '../../components/Logo/style';
import { Descricao, Title } from '../../components/Title/style';
import { ContainerLink } from './style';
import { AntDesign } from '@expo/vector-icons';
export function CriarConta(){

    return(


        <ContainerCadastro>
            <IconBox>
            <AntDesign name="closecircleo" size={24} color="#49B3BA" />
            </IconBox>
            

            <Logo
        source ={require('../../assets/VitalHub_Logo.png')}
        />
        <Title>Criar Conta</Title>

        <Descricao>
        Insira seu endereço de e-mail e senha para realizar seu cadastro.
        </Descricao>
        <InputText
         placeholder = {"Usuário ou E-mail"}
         placeholderTextColor = {"#49B3BA"}
         maxLength = {50}

         />

        <InputText
         placeholder = {"Senha"}
         placeholderTextColor = {"#49B3BA"}
         maxLength = {50}

         />
        <InputText
         placeholder = {"Confirmar Senha"}
         placeholderTextColor = {"#49B3BA"}
         maxLength = {50}

         />

         <Button>
            <BtnTitle>
            CADASTRAR
            </BtnTitle>
         </Button>
        <ContainerLink>
            <LinkBlack>Cancelar</LinkBlack>
        </ContainerLink>
        </ContainerCadastro>
        



    );

}