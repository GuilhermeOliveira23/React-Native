import styled from "styled-components";

export const InputText = styled.TextInput`
border: 2px solid #49B3BA;
background-color: #F6F6F6;
text-align: left;
padding:16px;

border-radius:5px;
width:90%;
font-family: 'Roboto_500Medium';
font-size:16px;
height:60px;
font-family: 'MontserratAlternates_600SemiBold';
`

export const InputCode = styled(InputText)`
width: 18%;
font-family: 'Quicksand_600SemiBold';
font-size: 40px;
padding: 0;
padding-left: 20px;
padding-bottom: 8px;
`