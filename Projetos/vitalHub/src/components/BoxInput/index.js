import { Text } from "react-native"
import { InputHigh,InputTextLarge, InputProfile} from "../Input/style"
import Label, { InputLabel, Lab, LabelPerfil } from '../Label/style'
import { BoxInput } from "./style"
import { Input } from "../Input"


export const InputBox = ({

    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType = "default",
    maxLength,
    placeholderTextColor
}) => {
    return (

        <BoxInput>

<LabelPerfil>Descrição da consulta</LabelPerfil>

            <Input
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            />

        </BoxInput>

    )
}

export const HighInputBox = ({

    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType = "default",
    maxLength,
    placeholderTextColor
}) => {
    return (

        <BoxInput>

<LabelPerfil>Descrição da consulta</LabelPerfil>

            <InputHigh
                
            />

        </BoxInput>


    )
}

// export const LargeInputTextBox = ({
//     fieldWidth = 100,
//     fieldHeight = 90,
//     editable = false,
//     textLabel,
//     placeholder,
//     fieldValue = null,
//     onChangeText = null,
//     keyboardType = "default",
//     maxLength,
//     placeholderTextColor
// }) => {
//     return (

//         <BoxInput fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

//             <Label textLabel={textLabel}/>

//             <InputTextLarge
//                 placeholder={placeholder}
//                 editable={editable}
//                 keyboardType={keyboardType}
//                 maxLength={maxLength}
//                 fieldValue={fieldValue}
//                 onChangeText={onChangeText}
//                 placeholderTextColor={placeholderTextColor}
//             />

//         </BoxInput>

//     )
// }