import { StyleSheet,View,Text,TextInput,TouchableOpacity } from "react-native"
import { useState } from 'react';
import { auth } from "../controller";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const RegistroUsuario = () => {
        createUserWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    console.log("Usuário cadastrado!", userCredential.user.email)
    navigation.navigate('Login')
  })
  .catch((error) => {
 
    console.log('error',error.message);
    // ..
  });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>
            <Text style={styles.txt}>Se você ainda não possui uma conta, cadastre-se para acessar os nossos serviços.</Text>

            <TextInput style={styles.inputs}
                        placeholder='Email'
                        placeholderTextColor={'black'}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput style={styles.inputs}
                        placeholder='Senha'
                        placeholderTextColor={'black'}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={true}
                    />

            <TouchableOpacity onPress={RegistroUsuario}>
                <Text style={styles.Btn}>Cadastre-se</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    titulo:{
        textAlign:'center',
        padding: 30,
        fontSize: 38,
        fontWeight: 'bold',
        color: '#000'
    },
    txt:{
        margin: 20,
        fontWeight:'bold',
        textAlign:'center',
        paddingBottom: 30,
        color:'#000',
        fontSize: 25,
    },
    inputs:{
            fontWeight:'bold',
            width: 300,
            borderWidth: 2,
            borderColor: '#7B00FF',
            borderRadius: 10,
            padding: 10,
            alignSelf: 'center',
            margin: 12,
            backgroundColor: '#FFF'
    },
    Btn:{
        fontWeight:'bold',
        alignSelf: 'center',
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: '#7B00FF',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(6, 242, 124, 1)',
        margin: 15
    }

  });