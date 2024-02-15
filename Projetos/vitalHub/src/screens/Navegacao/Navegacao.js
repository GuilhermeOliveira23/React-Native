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
            <Button title= "Verifique o seu Email"
            onPress = {() => navigation.navigate("VerificarEmail")}
            />
            <Button title= "Redefina sua senha"
            onPress = {() => navigation.navigate("RedefinirSenha")}
            />
            <Button title= "Crie uma conta"
            onPress = {() => navigation.navigate("CriarConta")}
            />
            <Button title= "Crie o seu perfil"
            onPress = {() => navigation.navigate("Perfil")}
            />
            <Button title= "Página de consulta médico"
            onPress = {() => navigation.navigate("ConsultaMedico")}
            />
        </View>
    )

}