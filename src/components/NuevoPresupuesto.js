import React from 'react';
import {
    Pressable,
    TextInput,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import estilosGenerales from '../styles';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, asignarPresupuesto }) => {


    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Definir Presupuesto</Text>
            <TextInput
                placeholder='Ingrese Monto Ej. Q.300'
                keyboardType='numeric'
                style={styles.input}
                value={presupuesto}
                onChangeText={setPresupuesto}
            >
            </TextInput>
            <Pressable
                style={styles.boton}
                onPress={() => asignarPresupuesto(presupuesto)}
            >
                <Text style={styles.textoBoton}>Guardar Presupuesto</Text>
            </Pressable>
        </View>

    );
}
const styles = StyleSheet.create({
    contenedor: {
        ...estilosGenerales.contenedor
    },
    label: {
        textAlign: 'center',
        color: '#3885f6',
        fontSize: 25
    },
    input: {
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginTop: 15
    },
    boton: {
        backgroundColor: '#1048a4',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: 15
    },
    textoBoton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

});

export default NuevoPresupuesto;
