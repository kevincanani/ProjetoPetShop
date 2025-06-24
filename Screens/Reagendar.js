import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { db } from "../controller";
import { collection, doc, addDoc, updateDoc, deleteDoc, or } from 'firebase/firestore';

export default function Veterinario() {

    const[consultaId, setConsultaId] = useState("");

    const[animalNovo, setAnimalNovo] = useState("");
    const[dataNovo, setDataNovo] = useState("");
    const[horarioNovo, setHorarioNovo] = useState("");
    const[racaNovo, setRacaNovo] = useState("");
    const[tipoconsultaNovo, setTipoConsultaNovo] = useState("");

    const AlterarConsulta = async () => {
        try {
            await updateDoc(collection(db, 'veterinario', consultaId), {
                animalNovo,
                dataNovo,
                horarioNovo,
                racaNovo,
                tipoconsultaNovo,
            })
            setAnimalNovo();
            setDataNovo();
            setHorarioNovo();
            setRacaNovo();
            setTipoConsultaNovo();
        } catch {
            console.log('Erro ao cadastrar produto! ', error)
        }
    }

    const RemoverConsulta = async () => {
        try {
            await deleteDoc(doc(db, 'veterinario', consultaId));
            console.log('Consulta removida com sucesso!');
        } catch (error) {
            console.log('Erro ao remover consulta: ', error);
        }
    };

    return(
        <ScrollView>
        <View style={styles.containerLogin}>
            <Text style={styles.textTitle}>Reagendar ou Cancelar Consulta</Text>

            <TextInput
            style={styles.txtInput}
            placeholder='Informe o ID da consulta'
            placeholderTextColor={'black'}
            value={consultaId}
            onChangeText={setConsultaId}
            />

            {/* <TextInput
            style={styles.txtInput}
            placeholder='Banho e Tosa ou Consulta'
            placeholderTextColor={'black'}
            value={email}
            onChangeText={setEmail}
            /> */}

            <TextInput
            style={styles.txtInput}
            placeholder='Animal'
            placeholderTextColor={'black'}
            value={animalNovo}
            onChangeText={setAnimalNovo}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Raça'
            placeholderTextColor={'black'}
            value={racaNovo}
            onChangeText={setRacaNovo}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Especificações'
            placeholderTextColor={'black'}
            // value={especificacoes}
            // onChangeText={setEspecificacoes}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Data da Consulta'
            placeholderTextColor={'black'}
            value={dataNovo}
            onChangeText={setDataNovo}
            />

            <TextInput
            style={styles.txtInput}
            placeholder='Horário da Consulta'
            placeholderTextColor={'black'}
            value={horarioNovo}
            onChangeText={setHorarioNovo}
            />

        <View style={styles.viewBtn}>
            <TouchableOpacity onPress={AlterarConsulta}>
                <Text style={styles.txtBtn}>Regendar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={RemoverConsulta}>
                <Text style={styles.txtBtn2}>Cancelar</Text>
            </TouchableOpacity>
        </View>

        </View>
        </ScrollView>
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