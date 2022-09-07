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
import Gasto from './Gasto';

const ListadoGastos = ({ gastos }) => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Gastos</Text>
            {gastos.length == 0 ?
                <Text style={styles.noGastos}>No hay Gastos</Text> :
                (
                    gastos.map(itemGasto=>(
                        <Gasto
                        key={itemGasto.id}
                        itemGasto={itemGasto}
                        >
                        </Gasto>
                    
                ))
                )}
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor:{
        marginBottom:50
    },
    titulo: {
        marginTop: 60,
        textAlign: 'center',
        color: '#5c5948',
        fontSize: 25,
        fontWeight: 'bold'
    },
    noGastos:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        color: '#a83819'
    }
});

export default ListadoGastos;
