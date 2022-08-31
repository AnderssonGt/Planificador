import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Image,
  Modal
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
        'Error', 'El presupuesto debe ser mayor a 0',
        [{ text: 'Aceptar' }]
      )
    }
  }
  return (
    <SafeAreaView style={styles.contenedorPrincipal}>
      <View style={styles.encabezado}>
        <Encabezado></Encabezado>
        {bandera ?
          (<ControlPresupuesto
            presupuesto={presupuesto}
            gastos={gastos}
          />) :
          (<NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            asignarPresupuesto={asignarPresupuesto}
          ></NuevoPresupuesto>
          )}
      </View>
      <Modal
        visible={mostrarFormGasto}
        animationType='slide'
      >
        <FormularioGasto
          setMostrarFormGasto={setMostrarFormGasto}
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
    top: 330,
    right: 20
  }
});

export default App;
