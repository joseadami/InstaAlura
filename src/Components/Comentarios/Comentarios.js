import React, { useState } from 'react';
import {Text, TextInput, FlatList, View, Image, TouchableOpacity, Alert} from 'react-native';
import estilo from './estilos'


const Comentarios = ({ comentarios }) => {
    const [estComentarios, setComentarios] = useState(comentarios)

    adicionarComentario = () =>{
        campoInput.clear()
        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: 'GabrielAdami'
        }
        if(novoComentario.text === ''){
            Alert.alert('digite algo')

        }else{
            setComentarios([... estComentarios, novoComentario])
        }
    }

    let campoInput;
    let conteudoCampoInput = '';
    return (
       <View>
            <FlatList
            data={estComentarios}
            keyExtractor={(item, index ) => index.toString()}
            renderItem={({ item }) => 
            <View style={estilo.viewInput}>  
                <Text style={{padding: 5}}>{item.userName}:</Text>
                <Text>{item.text}</Text>
            </View>
            }
            />
            <View style={estilo.viewInput}>
                    <TextInput 
                    ref={textInput => campoInput = textInput}
                    onChangeText={texto => conteudoCampoInput = texto }
                    style={estilo.textInput}
                    placeholder={'Deixe seu comentário.'}/>
                <TouchableOpacity onPress={adicionarComentario}>
                    <Image style={estilo.imageSend} source={require('../../../res/images/send.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};
export default Comentarios;