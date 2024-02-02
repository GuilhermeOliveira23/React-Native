import { ScrollForm,ContainerForm, ContainerBox} from "./style"
import { BoxInput } from "../../components/BoxInput"
import React, { useState } from "react"
export function Home(){

const [cep,setCep] = useState('12121');
const[logradouro,setLogradouro] = useState();
const [bairro,setBairro] = useState();
const [cidade,setCidade] = useState();
const [localidade,setLocalidade] = useState();
const [uf,setUf] = useState();


    return(

        <>
        <ScrollForm>
            <ContainerForm>
                <BoxInput 
                textLabel='Informar CEP'
                placeholder='Cep...'
                keyType='numeric'
                maxLength={9}
                editable={true}
                fieldValue={cep}
                onChangeText={
                     tx=> setCep(tx)
                }
                />

                <BoxInput 
                textLabel='Logradouro'
                placeholder='Logradouro...'
                maxLength={40}
                fieldValue={logradouro}
                />
                <BoxInput 
                textLabel='Bairro'
                placeholder='Bairro...'
                maxLength={40}
                fieldValue={bairro}
                />
                <BoxInput 
                textLabel='Cidade'
                placeholder='Cidade...'
                maxLength={40}
                fieldValue={cidade}
                />
                <ContainerBox>
                <BoxInput 
                textLabel='Estado'
                placeholder='Logradouro...'
                fieldWidth= '65'
                maxLenght={40}
                fieldValue={localidade}
                />
                <BoxInput
                textLabel='UF'
                placeholder='UF'
                fieldWidth= '30'
                maxLength={2}
                fieldValue={uf}
                />
                </ContainerBox>
                
            </ContainerForm>
        </ScrollForm>
        
        </>
    )

}