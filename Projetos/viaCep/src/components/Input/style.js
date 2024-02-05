import styled, { css } from 'styled-components'

export const InputText = styled.TextInput`
border: 2px solid #A1A1A1;
background-color: #F6F6F6;
text-align: left;
padding:20px;
margin-top:10px;
border-radius:10px;
width:100%;
font-family: 'Roboto_500Medium';
font-size:18px;


${props => props.editable && css`

background-color: white;
`
}
`

