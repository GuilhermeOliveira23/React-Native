import { ScrollForm,ContainerForm} from "./style"
import { BoxInput } from "../../components/BoxInput"
export function Home(){
    return(

        <>
        <ScrollForm>
            <ContainerForm>
                <BoxInput textLabel='Informar CEP'
                placeholder='Cep...'
                keyType="numeric"
                maxLenght={9}/>

                <BoxInput textLabel='Logradouro'
                placeholder='Logradouro...'/>
                <BoxInput textLabel='Bairro'
                placeholder='Bairro...'/>
                <BoxInput textLabel='Cidade'
                placeholder='Cidade...'/>
                
                <BoxInput textLabel='Estado'
                placeholder='Estado...'
                fieldWidth= '60'
                />

            </ContainerForm>
        </ScrollForm>
        
        </>
    )

}