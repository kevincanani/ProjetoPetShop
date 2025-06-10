import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Veterinario() {
    return(
        <View style={styles.containerLogin}>
            <Text style={styles.textTitle}>Veterinario</Text>

            <TextInput
            style={styles.txtInput}
            placeholder='Animal'
            placeholderTextColor={'black'}
            // value={email}
            // onChangeText={setEmail}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Raça'
            placeholderTextColor={'black'}
            // value={senha}
            // onChangeText={setSenha}
            secureTextEntry={true}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Tipo de Consulta'
            placeholderTextColor={'black'}
            // value={senha}
            // onChangeText={setSenha}
            secureTextEntry={true}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Tipo de Consulta'
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
        borderColor: '#7B00FF',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
        margin: 12,
        backgroundColor: '#00D8CD'
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
        borderColor: '#7B00FF',
        borderRadius: 10,
        backgroundColor: '#00D8CD',
        margin: 15
    }
})