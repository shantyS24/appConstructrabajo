import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { Picker } from '@react-native-picker/picker';
import useViewModel from './ViewModel';



export const RegisterScreenWorker = () => {

    const { nombreTrabajador, apellidoTrabajador, correoTrabajdor, docuTrabajador, selectedDocuTra, onChange } = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (

        <View style={styles.container}>
            <View style={styles.headerText}>

                <Text style={styles.titulo}>
                    Registro
                </Text>

                <Text style={styles.texto}>
                    {'Bienvenido, haz parte de Constructrabajo  '}
                </Text>

            </View>

            <View style={styles.contForm}>
                
                <TextInput
                    style={styles.input}
                    placeholder="Nombres"
                    keyboardType='default'
                    value={ nombreTrabajador }
                    onChangeText={text => onChange('nombreTrabajador', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Apellidos"
                    value={apellidoTrabajador}
                    onChangeText={text => onChange('apellidoTrabajador', text)}
                    keyboardType='default'
                />
                
                <TextInput
                    style={styles.input}
                    placeholder='Correo Electronico'
                    keyboardType='email-address'
                    secureTextEntry={true}
                    value={correoTrabajdor}
                    onChangeText={text => onChange('correoTrabajdor', text)}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Numero de Identidad"
                    keyboardType='numeric'
                    value={docuTrabajador}
                    onChangeText={text => onChange('docuTrabajador', text)}
                />

                <Text>Tipo de documento⬇️ </Text>
                <Picker
                    style={styles.inputIOS}
                    selectedValue={selectedDocuTra}
                    onValueChange={(itemValue) => onChange('selectedDocuTra', itemValue)}
                    >
                    <Picker.Item label="CC" value="CC" />
                    <Picker.Item label="CE" value="CE" />
                    <Picker.Item label="PPT" value="PPT" />
                </Picker>

            </View>

            <View style = {styles.viewBotonNext}>
                <TouchableOpacity style={styles.botonSiguiente} onPress={ () => {
                    console.log('Nombres:' + nombreTrabajador);
                    console.log('Apellidos:' + apellidoTrabajador);
                    console.log('Email:' + correoTrabajdor);
                    console.log('DocuIdentidad:' + docuTrabajador);
                    console.log('TipoDeDocu:' + selectedDocuTra );
                }}>
                    <Text style={styles.textoBoton}>Siguiente</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        position:'absolute',
        top: 120,
        alignItems: 'center',
    },
    titulo: {
        color: MyColors.primary,
        fontSize: 24,
        fontWeight: 'bold',
    },
    texto: {
        color: 'black',
        fontSize: 16,
        fontWeight: 400,
    },
    contForm: {
        position:'absolute',
        top: 280,
        gap:20,
    },
    input: {
        height: 55,
        width:350,
        borderRadius: 10,
        fontSize: 16,
        paddingHorizontal:20,
        backgroundColor:MyColors.placeholder,
    },
    contCheckboxs:{
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    checkbox: {
        margin: 8,
        width: 20,
        height: 20,
    },
    label: {
        margin: 8,
    },
    botonSiguiente: {
        width:350,
        height:60,
        backgroundColor: MyColors.primary,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 6,
        //IOS sombra
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        justifyContent:'center',
        alignItems:'center',
    },
    textoBoton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:500,
    },
    viewBotonNext:{
        position: 'absolute',
        bottom: 70,
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        backgroundColor: '#fff', // ✅ MUY IMPORTANTE
        zIndex: 10,
    },
            

});
