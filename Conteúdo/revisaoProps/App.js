
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <View>
     <Person name = 'Carlos' age = '12'/>
     <Person name = 'Eduardo' age = '12'/>
     <Person name = 'Enzo' age = '12'/>
     <StatusBar style="auto" />
    </View>
     
  );
}

