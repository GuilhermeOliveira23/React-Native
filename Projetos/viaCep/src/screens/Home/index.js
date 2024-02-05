import { ScrollForm,ContainerForm, ContainerBox} from "./style"
import { BoxInput } from "../../components/BoxInput"
import React, { useState, useEffect } from "react"
import api from "../../services/api";
import axios from "axios";


export function Home(){      
const [cep,setCep] = useState('');
const [logradouro,setLogradouro] = useState('');
const [bairro,setBairro] = useState('');
const [localidade,setLocalidade] = useState('');
const [estado,setEstado] = useState('')
const [uf,setUf] = useState('');




  useEffect( ()=>
   {

    async function buscarCep() {
       if (cep !== "" && cep.length === 8 ) {
        try {
            const response = await api.get(`${cep}/json/`);
            if (response.data) {
                setLogradouro(response.data.logradouro)
                setBairro(response.data.bairro);
                setLocalidade(response.data.localidade);
                setUf(response.data.uf);
                
                const estado = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}`)

                setEstado(estado.data.nome)

            }
            else{

                alert("Verifique o Cep")
            }

        } catch (error) {
            console.log("Ocorreu um erro ao buscar o CEP" + error);


        }
       }
      };

        buscarCep();
  },[cep]);


    return(

        <>
        <ScrollForm>
            <ContainerForm>
                <BoxInput 
                textLabel='Informar CEP'
                placeholder='Cep...'
                keyType='numeric'
                maxLength={8}
                editable={true}
                fieldValue={cep}
                onChangeText={
                     tx=> setCep(tx)
                }
                />

                <BoxInput 
                textLabel='Logradouro'
                placeholder={logradouro}
                maxLength={40}
                fieldValue={logradouro}
                />
                <BoxInput 
                textLabel='Bairro'
                placeholder={bairro}
                maxLength={40}
                fieldValue={bairro}
                />
                <BoxInput 
                textLabel='Cidade'
                placeholder={localidade}
                maxLength={40}
                fieldValue={localidade}
                />
                <ContainerBox>
                <BoxInput 
                textLabel='Estado'
                placeholder={estado}
                fieldWidth= '65'
                maxLenght={40}
                fieldValue={estado}
                />
                <BoxInput
                textLabel='UF'
                placeholder={uf}
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