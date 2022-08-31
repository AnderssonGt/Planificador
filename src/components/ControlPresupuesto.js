import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
}
  from 'react-native';
import estilosGenerales from '../styles';
const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [gastado, setGastado] = useState(0)
  const [disponible, setDisponible] = useState()

  useEffect(() => {
    const totalGastado = gastos.reduce((total, item) => total + Number(item.valor), 0)
    setGastado(totalGastado)
    setDisponible(presupuesto - totalGastado)
  }, [])
  return (
    <View style={estilosGenerales.contenedor}>

      <View style={styles.centrarImagen}>
        <Image
          source={require('../img/grafico.jpg')}
          style={styles.imagen}

        ></Image>
      </View >
      <View style={styles.contenedorTexto}>
        <Text style={styles.textValor}>
          <Text style={styles.label}>Presupuesto:</Text>
          {'Q.'}{presupuesto}
        </Text>
        <Text style={styles.textValor}>
          <Text style={styles.label}>Gastado:</Text>
          {'Q.'}{gastado}
        </Text>
        <Text style={styles.textValor}>
          <Text style={styles.label}>Disponible:</Text>
          {'Q.'}{disponible}
        </Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  centrarImagen: {
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200
  },
  contenedorTexto: {
    marginTop: 30
  },
  label: {
    color: '#55a9e6'
  },
  textValor: {
    textAlign: 'center',
    fontSize: 25
  }
});

export default ControlPresupuesto;
