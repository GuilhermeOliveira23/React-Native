import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MontserratAlternates_600SemiBold, MontserratAlternates_700Bold, MontserratAlternates_500Medium, useFonts } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { LoginPage } from './src/screens/LoginPage';
import { EsqueciSenha } from './src/screens/EsqueciSenha';
import { VerificarEmail } from './src/screens/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSenha';
import { CriarConta } from './src/screens/CriarConta';
import { ConsultaMedico } from './src/screens/ConsultaMedico';
import { Header } from './src/components/Header';
import { Perfil } from './src/screens/Perfil';

const Stack = createNativeStackNavigator();


export default function App() {
  const[fontsLoaded,fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    MontserratAlternates_500Medium,
    Quicksand_600SemiBold

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
      <Stack.Screen
      name='VerificarEmail'
      component={VerificarEmail}
      options={{title: "Verifique o seu Email"}}
      
      />
      <Stack.Screen
      name='CriarConta'
      component={CriarConta}
      options={{title: "Crie a sua conta"}}
      
      />
      <Stack.Screen
      name='RedefinirSenha'
      component={RedefinirSenha}
      options={{title: "Redefina a sua senha"}}
      
      />
      <Stack.Screen
      name='Perfil'
      component={Perfil}
      options={{title: "Crie o seu perfil"}}
      
      />
      <Stack.Screen
      name='ConsultaMedico'
      component={ConsultaMedico}
      options={{title: "Redefina a sua senha"}}
      
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
