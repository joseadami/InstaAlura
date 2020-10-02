import React, { useEffect, useState } from 'react';
import { ScrollView, FlatList, SafeAreaView } from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto'
import lerFotos from './src/api/feed'
import {Comentarios} from './src/Components/Comentarios'


function App (){
  const [fotos, setFotos] = useState([]);
  
  useEffect(() =>{
    lerFotos(setFotos);
  }, [])

  return(
    <SafeAreaView>
      <ScrollView>
        <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>
        <>
            <Cabecalho 
            urlImage={item.userURL}
            nomeUsuario={item.userName}/>
              <Foto 
              qntLikes={item.likes} 
              urlFoto={item.url} 
              descricao={item.description}/>
              <Comentarios comentarios={item.comentarios} />
          </>
          }
        />
      </ScrollView>
    </SafeAreaView>
  )
}
export default App;