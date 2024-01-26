import { Text, View, StyleSheet } from "react-native"

const Person = ({name, age}) =>{

    return(
        <View style = {styles.container}>
            <Text>
                Nome: {name}
            </Text>
            <Text>
                idade: {age}
            </Text>
        </View>
)
};
const styles = StyleSheet.create({
container: {
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 10,
    padding: 10,

}
})
export default Person;