import React,{Component} from 'react';
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';


class Destaques extends Component {

    render() {

      
            return (
                
                <View style={{flex: 1,flexDirection: 'row'}}>
                    <View style={{height:40, width: 140,backgroundColor:'green'}}>
                        <Text>{this.props.desconto} de Desconto</Text>
                       
                    </View>
                    <View style={{height:40, width: 140,backgroundColor:'#DAA520' , marginbottom: 10} }>
                    <Text>{this.props.promocao}</Text>
                    </View>

                </View>



            )

        }



    



}
export default Destaques;