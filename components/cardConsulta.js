import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

export default function CardConsulta({id, animal, raca, tipoconsulta, especificacoes, data, horario, deletar}){
    return(
        <View style={styles.card}>
            <Text style={styles.flatList}>{id}</Text>
            <Text style={styles.animal}>{animal}</Text>
            <Text style={styles.raca}>{raca}</Text>
            <Text style={styles.flatList}>{tipoconsulta}</Text>
            <Text style={styles.flatList}>{especificacoes}</Text>
            <Text style={styles.flatList}>{data}</Text>
            <Text style={styles.flatList}>{horario}</Text>

            <TouchableOpacity onPress={deletar}>
                <Text style={styles.txtBtn}>Remover</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 8
    },
    img:{
        width: 200,
        height: 200,
        flexDirection: 'row'
    },
    animal:{
        color: 'rgb(0, 2, 92)',
        fontWeight: 'bold',
        fontSize: 20
    },
    raca:{
        color: 'rgb(0, 2, 92)',
        fontWeight: 'bold',
    },
    flatList:{
        color: 'rgb(0, 2, 92)',
    },
    txtBtn:{
        alignSelf: 'center',
        padding: 7,
        paddingLeft: 30,
        paddingRight: 30,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'rgb(255, 0, 0)',
        color: 'rgb(255, 255, 255)',
        margin: 15
    }
})