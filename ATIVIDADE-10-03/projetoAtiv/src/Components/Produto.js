import React,{Component} from 'react';
import {View, Text} from 'react-native';
import Destaques from  './Destaques';
import TipoProduto from './TipoProduto';
class Produto extends Component {

    render(){
       
     
        return(
            
            <View style={{flex: 1, flexDirection: 'row', padding:5}}>
                <TipoProduto produto= {this.props.produto} marca={this.props.marca} valor={this.props.valor} quantidade={this.props.quantidade} id = {this.props.id} desconto= {this.props.desconto} promocao={this.props.promocao}></TipoProduto>
                
            </View>


        )

    }
    

    





}


export default  Produto;

