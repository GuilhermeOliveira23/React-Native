import { InputText } from "./style"

export const Input = ({
    placeholder,
    placeholderTextColor,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLength,
    fieldHeight
    }) =>{
    
        return(
           <InputText
           placeholder = {placeholder}
           editable = {editable}
           keyboardType = {keyType}
           value = {fieldValue}
           onChangeText = {onChangeText}
           maxLength = {maxLength}
           placeholderTextColor = {placeholderTextColor}
           fieldHeight = {fieldHeight}
         
           />
        )
    
    
    }