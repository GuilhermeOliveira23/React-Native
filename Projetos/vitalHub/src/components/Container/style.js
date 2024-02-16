import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #FAFAFA;
gap:23px;

`
export const ContentAccount = styled.View`
width:100%;
justify-content:center;
align-items:center;
`

export const ContainerLogin = styled.View`
width: 70%;
`

export const ContainerCadastro = styled(Container)`
gap: 10px;
`
export const IconBox = styled.View`
padding-right:80%;
padding-top: 5%;
`
export const ContainerHeader = styled(LinearGradient).attrs({
colors: ["#60BFC5", "#496BBA"],
start: {x: -0.05, y: 1.08},
end: {x:1, y:0}
})`
padding: 20px 20px 22px 20px;
width: 100%;
flex-direction: row;
border-radius: 0px 0px 15px 15px;
box-shadow: 0px 4px 15px #000014;
align-items:center;
justify-content:space-between;
`