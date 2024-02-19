import { HighInputBox, InputBox } from "../../components/BoxInput/index";
import { BoxInput } from "../../components/BoxInput/style";
import { Container } from "../../components/Container/style";
import { PerfilImg } from "../../components/Logo/style";
import { Descricao, Title } from "../../components/Title/style";
import { ScrollForm, ContainerPerfil } from "./style";

export function Perfil() {

    return (
        <ScrollForm>
        <ContainerPerfil>

            <PerfilImg
                source={require('../../assets/perfil.png')}

            />
            <Title>Richard Kosta</Title>
            <Descricao>22 anos      richard.kosta@gmail.com</Descricao>

        

                <HighInputBox
                    fieldHeight={350}
                    placeholderTextColor={"#34898F"}
                    textLabel={"Descrição da consulta"}
                    placeholder={"Descrição"}
                    editable={true}
                />

               

                <HighInputBox
                    fieldHeight={350}
                    placeholderTextColor={"#34898F"}
                    textLabel={"Prescrição médica"}
                    placeholder={"Prescriçao médica"}
                    editable={true}
                />



        </ContainerPerfil>

        </ScrollForm>
    )


}