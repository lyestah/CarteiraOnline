
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Image,TextInput,TouchableHighlight} from 'react-native';
import firebase from 'firebase';
import FirebaseConection from '../../src/firebase/FirebaseConection';

export default class Login extends Component {
  static navigationOptions = {
        title: 'Login'.toUpperCase(),
        header:null
    }
  constructor(props){
    super(props);
    this.state={
      login:'',
      senha:'',
      usuario:''
    }
    this.entrar=this.entrar.bind(this);
    firebase.auth().signOut();
  }

  efetuaLogin() {
    const uri = 'http://10.20.1.250/carteiraEstudantil/api2/login.php';
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({
        login: this.state.login,
        senha: this.state.senha
      }),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    };

    fetch(uri, requestInfo)
      .then(response => {
        if (response.ok)
          return response.text();

        throw 'Não foi possível efetuar login';
      })
      .then(token => {
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('usuario', this.state.usuario);
        this.redireciona();
      })
      .catch(erro => this.setState({mensagem: erro}));
  }

  entrar(){
    if (this.state.formEmail != '' && this.state.formSenha != '') {
        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    this.props.navigation.navigate('User');
                }
            });
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.formEmail, this.state.formSenha)
            .catch((error) => {
                alert(error.code);
            });
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.todo}>
        <Text style={styles.titulo}>
         {'e-ESTUDANTE'.toUpperCase()}
        </Text>
        <Text style={styles.titulo2}>{'Sua Carteira Digital'.toUpperCase()}</Text>
       <Image  source={require('../img/logo.png')} style={styles.imagem} />
        <View>
        {/* <Text style={styles.txt} >{'inscrição'.toUpperCase()}</Text> */}
        <TextInput underlineColorAndroid='transparent' value={this.state.formEmail} onChangeText={(formEmail) => {
                        this.setState({formEmail})
                    }} style={styles.Campoinput} placeholder='Insira sua Inscrição'></TextInput>
        {/* <Text style={styles.txt} >{'senha'.toUpperCase()}</Text> */}
        <TextInput underlineColorAndroid='transparent' value={this.state.formSenha} onChangeText={(formSenha) => {
                        this.setState({formSenha})
                    }} secureTextEntry={true}  style={styles.Campoinput} placeholder='Sua Senha'></TextInput>
        <TouchableHighlight onPress={this.entrar} style={styles.CampoBtn}>
          <Text style={styles.btnText} >ENTRAR</Text>
        </TouchableHighlight>
        </View>
        <Text>Programa para uso somente dos Alunos Granjenses</Text>
      </View></View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor: '#dddfdc',
    },
    todo: {
        marginTop:20,
        padding: 20,
        flex: 1,
        alignItems: 'center',
    },
    titulo2: {
        fontFamily: 'Bebas Neue Bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop:-20,
        color: '#747372',
    },
    titulo: {
        fontFamily: 'Bebas Neue Bold',
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
        height: 150,
        opacity: 1
    },
    user: {
        resizeMode: 'contain',
        height: 200,
        opacity: 1
    },
    txt: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 18

    },
    txt1: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 18,
        backgroundColor: '#ebebeb',
        padding: 5

    },
    coluna: {
        flex: 1,
        //borderWidth:2,
        //padding:10,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    nomeCidade: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 30
    }
});
