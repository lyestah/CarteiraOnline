
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,FlatList,Image
} from 'react-native';

export default class Lista extends Component {
  constructor(props){
    super(props);
    this.state={
      dados:[]
    };
    // https://localhost/api/dados/listar
    // fetch('http://192.168.3.5/carteiraEstudantil/api2/listar.php')
    fetch('http://10.20.1.250/carteiraEstudantil/api/dados/listar')
          .then((r)=>r.json())
          .then((json)=>{
            let state = this.state;
            state.dados=json.dados;
            this.setState(state);
          })
          .catch(error =>{
            alert("Deu Erro");
          });

  }
  render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={this.state.dados}
        keyExtractor={(item,index)=>item.nome}
        renderItem={({item})=>
        <Filme data={item} />}
      />
      </View>
    );
  }
}

class Filme extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.bg}>
        <View style={styles.areaimagem} >
      <Image  source={{uri:this.props.data.foto}} style={styles.foto} />

      <View style={styles.Areatxt}>
        <Text style={styles.txt}>Nome:{this.props.data.nome}</Text>
        <Text style={styles.txt}>Email:{this.props.data.email}</Text>
        <Text style={styles.txt}>Tel:{this.props.data.telefone}</Text>
        <Text style={styles.txt}>RG:{this.props.data.rg}</Text>
        <Text style={styles.txt}>Senha:{this.props.data.senha}</Text>
        <Text style={styles.txt}>Cód:{this.props.data.cod}</Text>
      </View>
        </View>
        <View>
          <Text style={styles.linha}></Text>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2
  },
  bg:{
    backgroundColor: '#ccc'
  },
  Areatxt:{
    padding: 10,

  },
  txt:{
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  areaimagem:{
    flex:1,
    flexDirection: 'row',
    padding: 3

  },
  linha:{
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  areaText:{
    flex:1,
    flexDirection: 'column'
  },
  foto:{
    height:100,
    width: 100,
   marginTop: 20,
    alignItems: 'center',
    padding: 2
  }
});
