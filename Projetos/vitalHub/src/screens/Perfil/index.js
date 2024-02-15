import { BoxInput } from "../../components/BoxInput";
import { Container } from "../../components/Container/style";

import { PerfilImg } from "../../components/Logo/style";
import { Descricao, DescricaoPerfil, Title } from "../../components/Title/style";

export function Perfil() {

    return (

        <Container>

            <PerfilImg
                source={require('../../assets/perfil.png')}

            />
            <Title>Richard Kosta</Title>
            <Descricao>22 anos      richard.kosta@gmail.com</Descricao>

            <BoxInput
                textLabel='Informar CEP'
                placeholder='Cep...'
                keyType='numeric'
                maxLength={8}
                editable={true}
                fieldHeight={60}

            />

            <BoxInput
                textLabel='Informar CEP'
                placeholder='Cep...'
                keyType='numeric'
                maxLength={8}
                editable={true}
                fieldHeight={30}

            />
            <BoxInput
                textLabel='Informar CEP'
                placeholder='Cep...'
                keyType='numeric'
                maxLength={8}
                editable={true}

            />



        </Container>


    )


}