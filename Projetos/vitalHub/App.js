import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MontserratAlternates_600SemiBold, MontserratAlternates_700Bold, MontserratAlternates_500Medium, useFonts } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { LoginPage } from './src/screens/LoginPage';
import { EsqueciSenha } from './src/screens/EsqueciSenha';


const Stack = createNativeStackNavigator();


export default function App() {
  const[fontsLoaded,fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    MontserratAlternates_500Medium

  });

  if (!fontsLoaded && fontError) {
    return null
  }


  return (
    <>
    {/* container envolve toda a estrutura da navegação */}
    {/* navigator componente para a navegação*/}
      {/* tela */}
         {/* name: nome da tela */}
         {/* component: componente a ser chamado */}
         {/* option(title): titulo da tela */}

    <NavigationContainer>

      <Stack.Navigator>

      <Stack.Screen
      name='Navegacao'
      component={Navegacao}
      options={{title: "Navegação"}}
      
      />
      <Stack.Screen
      name='LoginPage'
      component={LoginPage}
      options={{title: "Login"}}
      
      />
      <Stack.Screen
      name='EsqueciSenha'
      component={EsqueciSenha}
      options={{title: "Recuperara senha"}}
      
      />
      
    </Stack.Navigator>

      

    </NavigationContainer>
    <StatusBar style="auto" />
    </>
      
    
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
