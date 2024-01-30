import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground} from 'react-native';
import { useEffect, useState } from 'react';
import { Container ,ContainerBox } from './src/components/Container/Container';
import { Button, DecrementButton } from './src/components/Button/Button';
import { Title, TitleH1 } from './src/components/Title/Title';


// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Poppins_400Regular,

// } from '@expo-google-fonts/poppins';
// export default () => {
//   let [fontsLoaded] = useFonts({
//     Poppins_400Regular,
//   })

const image = {uri:'https://i.pinimg.com/736x/5c/cd/75/5ccd7544f3908ca293f66e9b186015df.jpg' }
export default function App() {
const [count,setCount] = useState(0);
const increment = () =>{
  setCount(count + 1);
}
useEffect(() =>{
  console.warn(`Contador Atualizado: ${count}`)
},[count])

const decrement = ()=> {
  
  if(count<= 0){
    console.log('Não é possível subtrair de zero')
  }
  else{
    setCount(count-1);
  }
}



  return (

    
    <Container source={image} resizeMode="cover">
       
      <ContainerBox>
      <TitleH1>Contador {count}</TitleH1>

      <Button onPress={increment}>
        <Title>Incrementar</Title>
      </Button>

      <DecrementButton onPress={decrement}>
        <Title>Decrementar</Title>
      </DecrementButton>
      </ContainerBox>
      <StatusBar style="auto" />
      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
