import { View, Text, Image, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function Login() {
    return(
        <View style={styles.containerLogin}>
            <Text style={styles.textTitle}>Login</Text>

            <TextInput
            style={styles.txtInput}
            placeholder='Email'
            placeholderTextColor={'black'}
            // value={email}
            // onChangeText={setEmail}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Senha'
            placeholderTextColor={'black'}
            // value={senha}
            // onChangeText={setSenha}
            secureTextEntry={true}
            />

            <Text style={styles.txt}>Ainda não possui uma conta? Cadastre-se agora.</Text>

            <TouchableOpacity>
                <Text style={styles.txtBtn}>Cadastre-se</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    containerLogin:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF'
    },
    txtInput:{
        width: 300,
        borderWidth: 2,
        borderColor: 'rgba(0, 111, 255, 1)',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
        margin: 12,
        backgroundColor: 'rgba(6, 242, 124, 1)'
    },
    textTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    btn:{
        alignItems: 'center'
    },
    txtBtn:{
        alignSelf: 'center',
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: 'rgba(0, 111, 255, 1)',
        borderRadius: 10,
        backgroundColor: 'rgba(6, 242, 124, 1)',
        margin: 15
    }
})