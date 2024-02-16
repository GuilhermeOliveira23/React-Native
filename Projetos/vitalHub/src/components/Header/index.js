

import { ContainerHeader } from "../Container/style"
import { BoxUser, DataUser, TextDefault , ImageUser, NameUser} from "./style"
import { MaterialIcons } from '@expo/vector-icons';
export const Header = () =>{

return(

<ContainerHeader>
    
     <BoxUser>
        <ImageUser source = {require("../../assets/doutor.png")}/>
            
        
        <DataUser>
        <TextDefault>Bem vindo!</TextDefault>
       
        <NameUser>Dr Leório</NameUser>
        
        </DataUser>
        
    </BoxUser> 
    <MaterialIcons name="notifications" size={25} color="white"/>
</ContainerHeader>

)


}