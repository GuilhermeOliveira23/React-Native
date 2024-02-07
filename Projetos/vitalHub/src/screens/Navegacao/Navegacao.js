import { View,Button } from "react-native"

export const Navegacao  = ({navigation}) =>{
    return(
        <View >
            <Button title= "Login"
            onPress = {() => navigation.navigate("LoginPage")}
            />
            <Button title= "Esqueci a senha"
            onPress = {() => navigation.navigate("EsqueciSenha")}
            />
        </View>
    )

}