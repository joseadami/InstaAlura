import React, { useState } from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import { curtirFoto, imgLike } from '../../api/Curtidas';
import estilo from './estilo'

export default function Foto ({urlFoto, qntLikes, descricao}){
  const [curtiu, setCurtiu] = useState(false)
  const [likes, setLikes] = useState(qntLikes)
  

  const clicouCurtir = ()=>{
    const [novoCurtiu, qnt] = curtirFoto(curtiu, likes)
    setLikes(qnt)
    setCurtiu(novoCurtiu)
  }
  return(
    <>
        <Image source={{uri: urlFoto}} style={estilo.Imagem} />
        <Text>{descricao}</Text>
        <View style={estilo.viewLike}>
          <TouchableOpacity onPress={clicouCurtir}>
            <Image 
            style={estilo.like}
            source={imgLike(curtiu)} />
          </TouchableOpacity>
          <Text>Curtidas {likes}</Text>
        </View>
    </>
  )
}