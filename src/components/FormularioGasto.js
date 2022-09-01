import React, { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    View,
    Pressable,
    Image,
    Text,
    TextInput,

} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import estilosGenerales from '../styles';
const FormularioGasto = ({ setMostrarFormGasto, agregaGasto }) => {
    const [categoria, setCategoria] = useState('')
    const [nombreGasto, setNombreGasto] = useState('')
    const [valorGasto, setValorGasto] = useState('')
    return (
        <SafeAreaView style={styles.formulario}>
            <Pressable
                style={styles.botonCerrar}
                onPress={() => { setMostrarFormGasto(false) }}
            >
                <Text style={styles.textoBoton}>X Cerrar</Text>
            </Pressable>
            <View style={estilosGenerales.contenedor}>

                <Text style={styles.titulo}>Nuevo Gasto</Text>


                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Gasto:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ingrese nombre del Gasto Ej. Comida'
                        value={nombreGasto}
                        onChangeText={setNombreGasto}
                    >
                    </TextInput>
                </View>

                <View style={styles.campo} >
                    <Text style={styles.label}>Valor:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ingrese valor del Gasto Ej. Q.50'
                        value={valorGasto}
                        onChangeText={setValorGasto}
                    >
                    </TextInput>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Categoria Gasto</Text>
                    <Picker
                        style={styles.input}
                        selectedValue={categoria}
                        onValueChange={(itemValue, itemIndex) =>
                            setCategoria(itemValue)
                        }
                    >
                        <Picker.Item value='' label='--Seleccione--' />
                        <Picker.Item value='Ahorro' label='Ahorro' />
                        <Picker.Item value='Comida' label='Comida' />
                        <Picker.Item value='Salud' label='Salud' />
                        <Picker.Item value='Entretenimiento' label='Entretenimiento' />
                    </Picker>


                <Pressable 
                style={styles.botonAgregar}
                onPress={()=>{agregaGasto({nombreGasto,valorGasto,categoria})
                setMostrarFormGasto(false)
                }}
                >
                        <Text style={styles.textoBoton}>Agregar gasto</Text>
                </Pressable>
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#15A3EB',
        flex: 1
    },
    botonCerrar: {
        backgroundColor: '#f2400a',
        marginHorizontal: 15,
        padding: 10,
        marginVertical: 20
    },
    textoBoton: {
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    titulo: {
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
    },
    campo: {
        marginTop:15
    },
    label: {
        fontSize:15,
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius:10,
        padding:10,
        marginTop:10
    },
    botonAgregar:{
        backgroundColor:'#89E27E',
        borderRadius:10,
        padding:10,
        marginTop:25
    }
});

export default FormularioGasto;
