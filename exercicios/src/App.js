import React from 'react';
import {View, StyleSheet} from 'react-native';

import Primeiro from './components/primeiro';
import X, {Comp1, Comp2} from './components/Multi';


export default () => (
  <View style={style.App}>
    <X />
    {/* o que nao é default pode ser qq nome */}
    <Comp1 />
    {/* o que nao é default tem que ser o nome */}
    <Comp2 />
    <Primeiro />
  </View>
);

const style = StyleSheet.create({
  App: {
    // backgroundColor: '#A00',
    //flex: 1, //significa que o componente pode crescer.
    flexGrow: 1, //pode crescer e vai ocupar a tela inteira    
    //se outros componentes dividino o mesmo espaco ai o numero tem diff.

     justifyContent: "center",   //alinhamento do eixo principal
     alignItems: "center", //eixo cruzado, valores no meio da tela.


  },
});

// function App() {
//   return <Text>Primeiro Componente 2</Text>;
// }

// export default function(){
//   return <Text>Primeiro Componente 2</Text>;
// };

// export default () => {
//   return <Text>Primeiro Componente 2</Text>;
// };
