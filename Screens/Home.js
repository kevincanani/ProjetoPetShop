import { StyleSheet,View,Text,Image,ScrollView} from "react-native";
import { ImageBackground } from 'react-native';

export default function Home(){

    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.bgali}>
            <ImageBackground style={styles.imgbg} source={require('../assets/background.jpeg')} />
            </View>
            <Text style={styles.titulo}>Pet & Repet</Text>
            <View style={styles.txtview}>
            <Text style={styles.txt2}>Seu pet bem cuidado, limpo e cheiroso
            Profissionais selecionados e pertinho de você para deixar seu pet limpinho e cheiroso com a facilidade do agendamento online.
            Tudo para manter a saúde do seu pet em dia
            Vacinas, consultas e exames com qualidade e carinho.O apoio do veterinário é essencial para qualidade de vida do seu melhor amigo.</Text>
            </View>
            <Text style={styles.txt3}>Como funciona o atendimento
            1
            Agende um horário
            Marque pelo site, app, Alô P&R (11) 4002-8922 ou nas lojas físicas.

            2
            Vá até a loja
            Estaremos esperando por vocês no dia e horário agendados.

            3
            Faça o check-in
            Ao chegar, confirmamos as necessidades do pet antes de começar o atendimento.

            4
            Busque o pet
            Fique na loja ou seja avisado por telefone quando o pet estiver pronto.</Text>
            

            <Text style={styles.txt}>Alguns de nossos patrocinadores:</Text>
            <View style={styles.imgview}> 
            <Image style={styles.img} source= {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUBgM27UWtkRFcrcZnVuVmxEtpB0uPTo4fg&s'}}/>
            <Image style={styles.img} source= {{uri:'https://images.petz.com.br/fotos/1656078673694.jpg'}}/>
            <Image style={styles.img} source= {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-waVZib5jS_8b7TDTwpvJQRs8Mq_r89cXw&s'}}/>
            </View>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    titulo:{
        margin: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: 'rgba(0, 111, 255, 1)',
        borderRadius: 10,
        height: 60,
        width:230,
        textAlign: 'center'
    },
    txt:{
        fontWeight:'bold',
        color:'#000',
        fontSize: 16,
        backgroundColor: 'rgba(6, 242, 124, 1)',
        borderRadius: 5,
        width: '20%',
        textAlign: 'center',
        margin: 10,
    },
    txt2:{
        fontWeight:'bold',
        color:'#000',
        fontSize: 18,
        width: '25%',
        backgroundColor: 'rgba(6, 242, 124, 1)',
        borderRadius: 20,
        textAlign: 'center',
        padding: 10,
    },
    txt3:{
        fontWeight:'bold',
        margin:10,
        color:'#000',
        fontSize: 18,
        width: '25%',
        backgroundColor: 'rgba(6, 242, 124, 1)',
        borderRadius: 15,
        textAlign: 'center',
        padding:10,
    },
    img:{
        width:130,
        height:130,
    },
    bgali:{
        alignItems:'center',
    },
    imgbg:{
        width:1400
    },
    imgview:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    txtview:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})