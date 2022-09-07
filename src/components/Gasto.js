import React from 'react';
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
import { formatoFecha } from '../helpers';
import estilosGenerales from '../styles';
const galeriaIconos={
    ahorro: require('../img/icono_ahorro.png'),
    casa: require('../img/icono_casa.png'),
    comida: require('../img/icono_comida.png'),
    gastos: require('../img/icono_gastos.png'),
    ocio: require('../img/icono_ocio.png'),
    salud: require('../img/icono_salud.png'),
    suscripciones: require('../img/icono_suscripciones.png')
}

const Gasto = ({ itemGasto }) => {
    const { nombreGasto, categoria, valorGasto, fecha } = itemGasto
    return (
        <View style={styles.contenedor}>
            <View style={styles.ficha}>
                <View style={styles.alineaImagen}>
                    <Image
                        style={styles.imagen}
                        source={galeriaIconos[categoria]}
                    ></Image>
                    <View style={styles.contenedorTexto}>
                        <Text style={styles.categoria}>{categoria}</Text>
                        <Text style={styles.nombreGasto}>{nombreGasto}</Text>
                        <Text style={styles.fecha}>{formatoFecha(fecha)}</Text>
                    </View>
                </View>
                <Text style={styles.valorGasto}>{'Q.'}{valorGasto}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor: {
        ...estilosGenerales.contenedor,
        marginBottom: 15,
    },
    ficha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagen: {
        width: 60,
        height: 60
    },
    alineaImagen: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1
    },
    contenedorTexto:{
        marginLeft:10
    },
    categoria:{
        textTransform:'uppercase',
        color:'#332424',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
        
    },
    nombreGasto:{
        color:'#D94821',
        fontSize:25
    },
    valorGasto:{
        color:'#436b2d',
        fontSize:30,
        fontWeight:'bold'
    },
    fecha:{
        fontSize:15,
        color:'#d4a10f',
        fontWeight:'bold'
    }
});

export default Gasto;
