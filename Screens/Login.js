import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Veterinario from "./Veterinario";
import { useState } from 'react';
import { auth } from "../controller";
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const VerificaUser = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                    navigation.navigate('Veterinario')
            })
            .catch((error) => {
                console.log('Erro ao logar! ',error.message);
            });
    }

    return(
        <View style={styles.containerLogin}>
            <Text style={styles.textTitle}>Login</Text>

            <View style={styles.viewInput}>
                <TextInput
                style={styles.txtInput}
                placeholder='Email'
                placeholderTextColor={'black'}
                value={email}
                onChangeText={setEmail}
                />

                <TextInput
                style={styles.txtInput}
                placeholder='Senha'
                placeholderTextColor={'black'}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                />

                <TouchableOpacity
                onPress={VerificaUser}>
                    <Text style={styles.txtBtn}>Efetuar Login</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.txt}>Ainda não possui uma conta?</Text>
            <Text style={styles.txt}>Cadastre-se agora.</Text>

            <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate('Cadastro')}>
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
        fontWeight: 'bold',
        width: 325,
        borderWidth: 2,
        borderColor: '#7B00FF',
        borderRadius: 15,
        padding: 15,
        alignSelf: 'center',
        margin: 15,
        backgroundColor: '#FFF'
    },
    textTitle:{
        padding: 25,
        fontSize: 45,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    btn:{
        alignItems: 'center'
    },
    txtBtn:{
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: '#7B00FF',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(6, 242, 124, 1)',
        margin: 15
    },
    txt:{
        fontWeight: 'bold',
        textAlign: 'justify',
        alignSelf: 'center',
        fontSize: 25
    },
    viewInput:{
        padding: 65
    },
    btn:{
        padding: 30
    }
})