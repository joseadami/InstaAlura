import React from 'react';
import {Text, Image, View, SafeAreaView} from 'react-native';
import estilo from './estilo'

const Cabecalho = ({nomeUsuario, urlImage}) =>{
    return ( 
    <SafeAreaView>
        <View style={estilo.cabecalho}>
            <Image 
            source={{ uri: urlImage}}
            style={estilo.fotoUsuario}
            />
            
            <Text>{nomeUsuario}</Text>
        </View>
    </SafeAreaView>
     );
}
export default Cabecalho