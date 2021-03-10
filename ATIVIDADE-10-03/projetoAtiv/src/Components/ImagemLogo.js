import  React,{Component} from 'react';
import {Text,Image,View} from 'react-native';

    class ImagemLogo extends Component {

        render() {
          
            return(
                
                <View>
                    
                    <Image 
                    source={{uri:'https://1.bp.blogspot.com/-xj_MO3iDxxc/YEfUnykHchI/AAAAAAAACWU/PEIIRKXn6AEuKKCOdXKLIkKyRIyHftMMwCLcBGAsYHQ/s1600/melao.png'}}
                    style={{width:this.props.larguraLogo, height:this.props.alturaLogo}}
                    />
                     <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={{fontSize:23,fontWeight: "bold" ,fontColor: 'white'}}>SuperMercado MadMAD</Text>
                      </View>

                </View>



            )

        }




    }
    export default ImagemLogo;

