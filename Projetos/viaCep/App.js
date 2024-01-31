import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ContainerApp } from './style';
import { Header } from './src/components/Header';




export default function App() {
  return (

    <ContainerApp>
      <StatusBar backgroundColor={'transparent'}
      translucent/>
      <Header/>
    </ContainerApp>
  );
}


