
import styled from "styled-components"
import { ImageBackground } from "react-native";
export const Container = styled.ImageBackground`
flex: 1;
align-items: center;
gap: 10;
justify-content: center;
margin-top: 10;
padding-top: 10;

`
import { LinearGradient } from 'expo-linear-gradient';
export const ContainerBox = styled(LinearGradient).attrs({
    colors: ['#d53369','#cbad6d'],
    start:{x:0, y:1},
    end:{x:1, y:0}
})`
border-radius:8px;
width: 250;
height: 250;
background-color: white;
align-items: center;
gap: 10;
justify-content: center;
margin-top: 10;
padding-top: 10;

`

