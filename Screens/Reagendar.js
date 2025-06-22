import { updateDoc } from "firebase/firestore";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { db } from "../controller";
import { collection, doc, addDoc } from 'firebase/firestore';

export default function Veterinario() {

    const[animal, setAnimal] = useState("");
    const[data, setData] = useState("");
    const[horario, setHorario] = useState("");
    const[raca, setRaca] = useState("");
    const[especificacoes, setEspecificacoes] = useState("");

    const ReagendarBanhoTosa = async () => {
        try {
            await updateDoc(collection(db, 'banhotosa'), {
                animal,
                data,
                horario,
                raca,
                especificacoes,
            })
            setAnimal();
            setData();
            setHorario();
            setRaca();
            setEspecificacoes();
        } catch {
            console.log('Erro ao cadastrar produto! ', error)
        }
    }

    return(
        <View style={styles.containerLogin}>
            <Text style={styles.textTitle}>Reagendar ou Cancelar Consulta</Text>

            <TextInput
            style={styles.txtInput}
            placeholder='Banho e Tosa ou Consulta'
            placeholderTextColor={'black'}
            // value={email}
            // onChangeText={setEmail}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Animal'
            placeholderTextColor={'black'}
            value={animal}
            onChangeText={setAnimal}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Raça'
            placeholderTextColor={'black'}
            value={raca}
            onChangeText={setRaca}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Especificações'
            placeholderTextColor={'black'}
            value={especificacoes}
            onChangeText={setEspecificacoes}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Data da Consulta'
            placeholderTextColor={'black'}
            value={data}
            onChangeText={setData}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Horário da Consulta'
            placeholderTextColor={'black'}
            value={horario}
            onChangeText={setHorario}
            />

        <View style={styles.viewBtn}>
            <TouchableOpacity onPress={ReagendarBanhoTosa}>
                <Text style={styles.txtBtn}>Regendar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.txtBtn2}>Cancelar</Text>
            </TouchableOpacity>
        </View>

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
        backgroundColor: '#00D8CD'
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
        alignSelf: 'center',
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: '#7B00FF',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#00D8CD',
        margin: 15
    },
    txtBtn2:{
        alignSelf: 'center',
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: '#7B00FF',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#ff0000',
        margin: 15
    },
    viewBtn:{
        flexDirection: 'row',
        display: 'flex'
    }
})