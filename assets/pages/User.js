import React, { Component } from 'react';
import firebase from 'firebase';
import FirebaseConection from '../../src/firebase/FirebaseConection';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
export default class User extends Component {
    static navigationOptions = {
        title: 'Users'.toUpperCase(),
        headerTitleStyle: { color: '#fff' },
        headerStyle: {
            backgroundColor: '#3c5430'
        }
    }
    constructor(props) {
        super(props);
        this.state = {
          cidade:'',
          dados:undefined
        };
     this.setaCidade=this.setaCidade.bind(this);
    // fetch("http://192.168.3.5/carteiraEstudantil/api2/user.php")
    fetch("http://10.20.1.250/carteiraEstudantil/api2/user.php")
          .then(r =>r.json())
          .then(json =>{
            this.setState({dados:json[0]})
          })
          .catch(error =>{
            alert("Deu Erro");
          });

  }
  setaCidade(){
    if(this.state.dados&&this.state.dados.local_idlocal == 1){
                alert("Entro no if");
                this.state.cidade='SOBRAL';
            }else{
                alert("Entro no Else");
                this.state.cidade="CAMOCIM";       
            }
  }
  
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.todo}>
            <Text style={styles.txt}>{'Nome Completo'.toUpperCase()}</Text>
            <Text style={styles.txt1}>{this.state.dados&&this.state.dados.nome.toUpperCase()}</Text>
            <Text style={styles.txt}>{'Identidade'.toUpperCase()}</Text>
            <Text style={styles.txt1}>{this.state.dados&&this.state.dados.rg.toUpperCase()}</Text>
             <Text style={styles.txt}>{'curso'.toUpperCase()}</Text>
             <Text style={styles.txt1}>{this.state.dados&&this.state.dados.curso.toUpperCase()}</Text>
             <Text style={styles.txt}>{'Instituição de Ensino'.toUpperCase()}</Text>
             <Text style={styles.txt1}>{this.state.dados&&this.state.dados.nome_0.toUpperCase()}</Text>
             <Text style={styles.nomeCidade}>{this.setaCidade()}</Text>
             <View style={styles.coluna}>
            <Image source={require('../img/qrcode.png')} style={styles.qrcode }/>
            <Image source={{uri:this.state.dados&&this.state.dados.foto.replace('http:','https:')}} style={styles.user }/>
            <Text style={styles.validade} >Documento válido até:{this.state.dados&&this.state.dados.cod.toUpperCase()}</Text>
            </View>
            </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#dddfdc',
    },
    todo: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'flex-start',
    },
    titulo2: {
        fontFamily: 'bebasneuebold',
        fontSize: 20,
        textAlign: 'center',
        color: '#747372',
    },
    titulo: {
        fontFamily: 'bebasneuebold',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3c5430'
    },
    Campoinput: {
        height: 40,
        width: 350,
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderColor: '#ccc',
        marginTop: 5,
        padding: 10,
        fontSize: 20
    },
    CampoBtn: {
        height: 60,
        width: 350,
        backgroundColor: '#43a047',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#c6cec8',
        fontSize: 22,
        fontWeight: 'bold'

    },
    imagem: {
        resizeMode: 'contain',
        height: 250,
        opacity: 0.4
    },
    qrcode: {
        resizeMode: 'contain',
        height: 70,
        opacity: 1
    },
    user: {
        resizeMode: 'contain',
        height: 200,
        opacity: 1
    },
    txt: {
      width: '100%',
        color: '#3c5430',
        fontFamily: 'bebasneuebold',
        fontWeight: 'bold',
        fontSize: 18

    },
    txt1: {

       width: '100%',
        color: '#222',
        fontWeight: 'bold',
        fontSize: 15,
        backgroundColor: '#ebebeb',
        padding: 5

    },
    coluna: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    nomeCidade: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 50
    },
    validade:{
      width: '100%',
      fontSize: 17,
      fontWeight: 'bold'
    }
});
