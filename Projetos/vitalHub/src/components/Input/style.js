import styled, { css } from "styled-components";

export const InputText = styled.TextInput`
border: 2px solid #49B3BA;
background-color: #F6F6F6;
text-align: left;
padding:16px;
border-radius:5px;
width:90%;
font-family: 'Roboto_500Medium';
font-size:16px;
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

export const InputProfile = styled.TextInput`

background-color: #F5F3F3;
padding-left: 15px;
text-align: left;
width:90%;
height: 55px;
border:1px solid #F5F3F3;
font-family: MontserratAlternates_500Medium;
color: #33303E;
border-radius: 8px;
/* padding: 20px;
margin-top: 10px;
margin-bottom: 5px; */
font-size: 16px;
`
export const InputHigh = styled(InputText)`
    padding-bottom: 82px;
    height: 125px;
    width: 90%;
`

export const InputTextLarge = styled(InputText)`
    width: 90%;
`

