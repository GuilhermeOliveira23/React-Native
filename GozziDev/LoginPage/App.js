import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style = {styles.stretch} source={require('./src/assets/images/VitalHub_Logo.png') }/> 
      <Text style = {styles.txt}>Login</Text>
      <TextInput style= {styles.txtInput}  placeholder='Insira o seu Email'/>
      <TextInput style= {styles.txtInput} placeholder='Insira a sua senha'/>
      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.txtButton}>
          Entrar
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49B3BA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  stretch:{
 width: 200,
 height: 140,
 resizeMode: 'stretch',

  },
  txt:{
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
  },
  txtInput:{
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '49B3BA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    color:'white',
    paddingLeft: 10,

  },
  button:{
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#496BBA',
    borderRadius: 8,
    
  },
  txtButton:{
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  }

});
