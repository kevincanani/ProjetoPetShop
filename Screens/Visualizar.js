import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import CardConsulta from "../components/cardConsulta";
import { db } from "../controller";
import { collection, doc, query, where, Firestore, getDocs, deleteDoc } from 'firebase/firestore';
import firebase from "firebase/compat/app";
// import { useCarrinho } from "../CarrinhoProvider";
// import Carrinho from "./Carrinho";

export default function Visualizar() {
    const [veterinario, setVeterinario] = useState([])
    // const {adicionarProduto} = useCarrinho()

    useEffect(() => {
        async function carregarVeterinario() { //é assincrona pois espera uma resposta para ser executada
            try{
                const querySnapshot = await getDocs(collection(db, 'veterinario')) //será realizada após a variavel produtos ser buscada no banco
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id:doc.id, ...doc.data()}); //adiciona todos os dados ao final da lista
                });
                setVeterinario(lista);
            } catch(error){
                console.log('Erro ao buscar o produto', error);
            }
        }
        carregarVeterinario(); //exibe os produtos após a função ser criada
    }, []);

    const [banhotosa, setBanhoTosa] = useState([])

    useEffect(() => {
        async function carregarBanhoTosa() { //é assincrona pois espera uma resposta para ser executada
            try{
                const querySnapshot = await getDocs(collection(db, 'banhotosa')) //será realizada após a variavel produtos ser buscada no banco
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id:doc.id, ...doc.data()}); //adiciona todos os dados ao final da lista
                });
                setBanhoTosa(lista);
            } catch(error){
                console.log('Erro ao buscar o produto', error);
            }
        }
        carregarBanhoTosa(); //exibe os produtos após a função ser criada
    }, []);

    return(
        <ScrollView>
        <View style={styles.containerLogin}>
            <Text style={styles.textTitle}>Suas consultas: </Text>

            <Text style={styles.textType}>Consultas: </Text>

            <FlatList
            data={veterinario}
            renderItem={({item}) => (
                <CardConsulta
                id={item.id}
                animal={item.animal}
                raca={item.raca}
                tipoconsulta={item.tipoconsulta}
                data={item.data}
                horario={item.horario}
                // imagem={item.imagem}
                // comprar={()=>{
                //     adicionarProduto(item);
                //     navigation.navigate(Carrinho);
                // }}
                />
            )}
            keyExtractor={item => item.id}
            />

            <Text style={styles.textType}>Banhos e Tosas: </Text>

            <FlatList
            data={banhotosa}
            renderItem={({item}) => (
                <CardConsulta
                id={item.id}
                animal={item.animal}
                raca={item.raca}
                especificacoes={item.especificacoes}
                data={item.data}
                horario={item.horario}
                // imagem={item.imagem}
                // comprar={()=>{
                //     adicionarProduto(item);
                //     navigation.navigate(Carrinho);
                // }}
                />
            )}
            keyExtractor={item => item.id}
            />

            <TouchableOpacity>
                <Text style={styles.txtBtn}>Alterar</Text>
            </TouchableOpacity>

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
    textType:{
        padding: 25,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#03095e'
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
        backgroundColor: '#06f27c',
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
        flexDirection: 'row'
    }
})