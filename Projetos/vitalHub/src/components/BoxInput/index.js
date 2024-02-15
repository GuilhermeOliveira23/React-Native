import { FieldContent } from "./style"
import { Label } from "../Label"
import { InputText } from "../Input/style"
import { ContainerBox } from "./style"


export const BoxInput = ({

    fieldWidth = 90,
    fieldHeight = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,

}) => {
    return (

        <FieldContent
            fieldWidth={fieldWidth}
            fieldHeight={fieldHeight}
        >

            <ContainerBox>
                <Label textLabel={textLabel} />
            </ContainerBox>

            <InputText
                editable={editable}
                placeholder={placeholder}
                keyType={keyType}
                maxLength={maxLength}
                value={fieldValue}
                onChangeText={onChangeText}
            />
        </FieldContent>
    )
}