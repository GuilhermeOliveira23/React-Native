import { InputText } from "./style"


export const Input = ({
placeholder,
editable,
fieldValue,
onChangeText,
keyType,
maxLenght
}) =>{

    return(
       <InputText
       placeholder = {placeholder}
       editable = {editable}
       keyboardType = {keyType}
       value = {fieldValue}
       onChangeText = {onChangeText}
       maxLenght = {maxLenght}
       
       />
    )


}