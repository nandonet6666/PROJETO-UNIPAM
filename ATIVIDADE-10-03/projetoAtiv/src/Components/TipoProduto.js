import  React,{Component} from 'react';
import {Text,Image,View} from 'react-native';
import Destaques from  './Destaques';

    class TipoProduto extends Component {

        render() {
          
            return(
                <View style={{flex: 1,flexDirection: 'row', backgroundColor: '#C0C0C0' }}>
                <View style={{height:120, width: 140}}>
                <Text style={{fontSize: 20}}>{this.props.produto} </Text>
                <View style={{flexDirection: 'column', width: 140}}>
                <Text >Valor:{this.props.valor} </Text>
                <Text style={{position: 'absolute' ,left: 140}}>Marca:{this.props.marca}</Text>
              
                </View>

                <View style={{flexDirection: 'row'}}>
                <Text>Qtdade: {this.props.quantidade}</Text>
                <Text style={{position: 'absolute' ,left: 140}}>Ref:{this.props.id}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Destaques desconto={this.props.desconto} promocao={this.props.promocao}></Destaques>
                </View>
                </View>


                </View>

            )





        }

    }
    export default TipoProduto;