
import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View ,Button,Image} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      imagem: '',
      frase: ''

    };
  
    this.AlterarMensagem = this.AlterarMensagem.bind(this);
    this.limpar = this.limpar.bind(this);
  
  }
   getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  limpar() {
    this.setState({imagem:''}); 
    this.setState({frase:''});     
}

  AlterarMensagem(){
    var aleatorio = this.getRandomInt(1,5);
    
    switch(aleatorio){
    case 1:{
      
      
       this.setState({imagem: this.state.imagem ='https://i.pinimg.com/736x/bc/8c/0a/bc8c0a529ca550cc8c0668d7f5864987.jpg'});
      this.setState({frase: this.state.frase + 'A vida se  torna uma jornada melhor quando encontramos\n pessoas tão loucas quanto nós'});
      
        break;
    }
    case 2:
     {  
      
      this.setState({imagem: this.state.imagem = 'https://i.pinimg.com/736x/bc/8c/0a/bc8c0a529ca550cc8c0668d7f5864987.jpg'});
      this.setState({frase: this.state.frase + 'Uma amizade nao se faz pelo tempo que existe,\nmas pela sinceridade do sentimento que há presente nela'});
       
      
       break;
    }
    case 3:
    { 
  
      this.setState({imagem: this.state.imagem ='https://i.pinimg.com/originals/dd/f7/72/ddf772e96b2bea9878876082f25ac81d.jpg'}),
      this.setState({frase: this.state.frase + 'Amigos sao presente que a vida une e o tempo enlaça'});
      
   
        break;}

    case 4:{
      
      this.setState({imagem: this.state.imagem = 'https://static.frasesparaface.com.br/imagem/oo/rg/o-orgulho-nao-leva-a-nada-apenas-complica-o-que.jpg'});
      this.setState({frase: this.state.frase + 'O orgulho nao leva a nada apenas dificulta o que tem facil resolução'});
      
     
        break;
    }
    case 5:{
      
      this.setState({imagem: this.state.imagem = 'https://static.frasesparaface.com.br/imagem/oo/rg/o-orgulho-pode-afastar-voce-das-pessoas.jpg'});
      this.setState({frase: this.state.frase + 'O orgulho pode afatar voce das pessoas importante da sua vida'});

        break;}

}


    }

  render() {
  return (
    <View style={styles.container}>
      <Image
      style= {{height:150, width:350}}
      source = {{uri: this.state.imagem}}
      
      />
      <Text Sytle={{flex:1, margin:50}}>{this.state.frase}</Text>
      <Button style={styles.botaoalterar}
      title="Alterar Frases"
      onPress={this.AlterarMensagem}
      />

      <Button style={styles.botaolimpar}
      title="Limpar a Tela"
      onPress={this.limpar}
      />
     
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaolimpar:{

    
    width:5
  },
  botaoalterar:{

    fontSize:10,
    width:100
  }
});

export default App;
