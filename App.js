import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Image,
  Modal,
  Text,
  FlatList
} from 'react-native'
import Encabezado from './src/components/Encabezado';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [bandera, setBandera] = useState(false)
  const [gastos, setGastos] = useState([])
  const [mostrarFormGasto, setMostrarFormGasto] = useState(false)
  const asignarPresupuesto = (itemPresupuesto) => {
    if (itemPresupuesto > 0) {
      setBandera(true)
    }
    else {
      setBandera(false)
      Alert.alert(
        'Error', 'El presupuesto debe ser mayor a 0', [{ text: 'Aceptar' }]
      )
    }
  }

  const agregaGasto = (nuevoGasto) => {
    if (Object.values(nuevoGasto).includes('')) {
      Alert.alert(
        'Error', 'Todos los campos son obligatorios', [{ text: 'Aceptar' }]
      )
      console.log(agregaGasto)
    }
    else {
      nuevoGasto.id = Date.now()
      setGastos([...gastos, nuevoGasto])
    }
  }

  return (
    <SafeAreaView style={styles.contenedorPrincipal}>
      <View style={styles.encabezado}>
        <Encabezado></Encabezado>
        {bandera ?
          (
              <ControlPresupuesto
                presupuesto={presupuesto}
                gastos={gastos}
              />
          ) :
          (<NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            asignarPresupuesto={asignarPresupuesto}
          ></NuevoPresupuesto>
          )}
      </View>
      {bandera &&  
      (
      <View>
      <Text style={styles.tituloGastos}>Gastos</Text>
      <FlatList>

      </FlatList>
      </View>
      )}
      <Modal
        visible={mostrarFormGasto}
        animationType='slide'
      >
        <FormularioGasto
          setMostrarFormGasto={setMostrarFormGasto}
          agregaGasto={agregaGasto}
        >
        </FormularioGasto>
      </Modal>
      {bandera &&
        <Pressable
          onPress={() => { setMostrarFormGasto(true) }}
        >
          <Image
            style={styles.imagen}
            source={require('./src/img/nuevo-gasto.png')}
          ></Image>
        </Pressable>
      }
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  contenedorPrincipal: {
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  encabezado: {
    backgroundColor: '#15A3EB'
  },
  imagen: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 200,
    right: 20
  },
  tituloGastos:{
    marginTop:60,
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold'
  }
});

export default App;
