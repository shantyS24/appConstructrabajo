import React from 'react'; 
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
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

    <ScrollView contentContainerStyle={styles.container}>  

        {/* Contenedor para el botón de regresar */}
        <View style={styles.viewBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                {/* La imagen de la flechita */}
                <Image
                    style={styles.imgBack}
                    source={require('../../../../assets/back.png')}
                />
            </TouchableOpacity>
        </View>  
            <View style={styles.headerText}>

                <Text style={styles.titulo}>
                    Registro
                </Text>

                <Text style={styles.subtitulo}>
                    {'Bienvenido, haz parte de Constructrabajo  '}
                </Text>

            </View>

            <View style={styles.formContainer}>
                
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
                    placeholder='Direccion de residencia'
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

            <View style = {styles.botonContainerNext}>
                <TouchableOpacity style={styles.botonSiguiente} onPress={ () => navigation.navigate('Register2Screen') }>
                    <Text style={styles.textoBoton}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        
    </ScrollView>
    );
}


const styles = StyleSheet.create({
    //!Contenedor general
    container: {
        flexGrow: 1, 
        backgroundColor: '#fff',
        alignItems: 'center', 
        paddingTop: 60, 
        paddingBottom: 40, 
    },
    //!Contenedor para la flechita de regreso
    viewBack: {
        width: '90%', 
        alignSelf: 'flex-start', 
        marginBottom: 20,
        paddingLeft: '5%', 
    },
    imgBack: {
        width: 40,
        height: 40,
    },
    //!Contenedor para los titulos
    headerText: {
        width: '90%',
        alignItems: 'center', 
        marginBottom: 30,
    },
    //*Titulo
    titulo: {
        color: MyColors.primary,
        fontSize: 28, 
        fontWeight: 'bold',
        marginBottom: 5, 
    },
    //*Subtitulo
    subtitulo: { 
        fontSize: 16,
        fontWeight: '400', 
        textAlign: 'center', 
    },
    //!Contenedor para el formulario
    formContainer: { 
        width: '90%', 
        gap: 15, 
        top: 50,
        alignItems: 'center', 
        marginBottom: 30, 
    },
    //?TextInputs
    input: {
        height: 55,
        width:350,
        borderRadius: 10,
        fontSize: 16,
        paddingHorizontal:20,
        backgroundColor:MyColors.placeholder,
    },
    //!Contenedor del botón 
    botonContainerNext: { 
        width: '90%', 
        alignItems: 'center', 
        marginTop: 20, 
    },
    //?Boton de siguiente
    botonSiguiente: {
        width: '100%', 
        height: 60,
        backgroundColor: MyColors.primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6, 
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
    },
    //*Texto del Boton
    textoBoton: {
        color: 'white',
        fontSize: 18, 
        textAlign: 'center',
        fontWeight: '600', 
    },
    inputIOS: {
        width: 350,
        zIndex: 10,
    },

});

