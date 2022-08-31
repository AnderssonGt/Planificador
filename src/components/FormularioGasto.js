import React, { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    View,
    Pressable,
    Image,
    Text,
    TextInput
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
const FormularioGasto = ({ setMostrarFormGasto }) => {
    const [selecCategoria,setSelectCategoria]=useState('')
    const [nombreGasto,setNombreGasto]=useState('')
    const [valorGasto,setValorGasto]=useState('')
    return (
        <SafeAreaView>
            <Pressable
                onPress={() => { setMostrarFormGasto(false) }}
            >
                <Text>X Cerrar</Text>
            </Pressable>
            <View>
                <Text>Nuevo Gasto:</Text>
            </View>

            <View>
                <Text>Nombre Gasto:</Text>
                <TextInput
                    placeholder='Ingrese nombre del Gasto Ej. Comida'
                    value={nombreGasto}
                    onChangeText={setNombreGasto}
                >
                </TextInput>
            </View>

            <View>
                <Text>Valor</Text>
                <TextInput
                    placeholder='Ingrese valor del Gasto Ej. Q.50'
                    value={valorGasto}
                    onChangeText={setValorGasto}
                >
                </TextInput>
            </View>

            <View>
                <Text>Seleccione Categoria</Text>
                <Picker
                selectedValue={selecCategoria}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectCategoria(itemValue)
                }
                >
                    <Picker.Item value='' label='--Seleccione--'/>
                    <Picker.Item value='Ahorro' label='Ahorro'/>
                    <Picker.Item value='Comida' label='Comida'/>
                    <Picker.Item value='Salud' label='Salud'/>
                </Picker>
            </View>
        </SafeAreaView>

    );
}

export default FormularioGasto;
