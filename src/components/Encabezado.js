import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
const Encabezado = () => {
  return (
    <View>
      <Text style={styles.titulo}>Planificador De Gastos</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 15
  }
});

export default Encabezado;