import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import Checkbox from 'expo-checkbox';

export const Register3Screen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Contenedor para botón de regreso */}
            <View style={styles.viewBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.imgBack}
                        source={require('../../../assets/back.png')}
                    />
                </TouchableOpacity>
            </View>

            {/* Contenedor del título */}
            <View style={styles.headerText}>
                <Text style={styles.titulo}>Constructrabajo</Text>
            </View>

            {/* Contenedor del formulario */}
            <View style={styles.contForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre de Usuario"
                />

                {/* Camello*/}
                <Text style={styles.sectionSubtitle}>Area donde va a desempeñar su labor</Text>
                <View style={styles.contCheckboxs}>
                    <View style={styles.checkboxRow}>
                        <Checkbox style={styles.checkbox} />
                        <Text style={styles.label}>Construcción</Text>
                    </View>
                    <View style={styles.checkboxRow}>
                        <Checkbox style={styles.checkbox} />
                        <Text style={styles.label}>Aseo y Limpieza</Text>
                    </View>
                </View>

                {/* Habilidades */}
                <Text style={styles.sectionSubtitle}>Habilidades o destrezas</Text>
                <View style={styles.contCheckboxsHabilidades}>
                    <View style={styles.checkboxRowGrid}>
                        <Checkbox style={styles.checkbox} />
                        <Text style={styles.label}>Servicio General</Text>
                    </View>
                    <View style={styles.checkboxRowGrid}>
                        <Checkbox style={styles.checkbox} />
                        <Text style={styles.label}>Aseo vehículo</Text>
                    </View>
                    <View style={styles.checkboxRowGrid}>
                        <Checkbox style={styles.checkbox} />
                        <Text style={styles.label}>Limpieza Industrial</Text>
                    </View>
                    <View style={styles.checkboxRowGrid}>
                        <Checkbox style={styles.checkbox} />
                        <Text style={styles.label}>Limpieza Exteriores</Text>
                    </View>
                    <View style={styles.checkboxRowGrid}>
                        <Checkbox style={styles.checkbox} />
                        <Text style={styles.label}>Limpieza en Obra</Text>
                    </View>
                </View>

                {/* Botón Adjuntar documento Identidad */}
                <TouchableOpacity style={styles.attachButton}>
                    <Text style={styles.attachButtonText}>Adjuntar documento Identidad </Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.textAreaInput}
                    placeholder="Descripción breve de su perfil"
                    multiline={true}
                    numberOfLines={4}
                    textAlignVertical="top"
                />
            </View>

            {/* Contenedor para botón de siguiente */}
            <View style={styles.botonContainerNext}>
                <TouchableOpacity
                    style={styles.botonSiguiente}
                    onPress={() => navigation.navigate('Register3Screen')} 
                >
                    <Text style={styles.textoBoton}>Registrarme</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

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
    //!Contenedor para el título
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
    },
    //*Subtitulos para las habilidades y el camello
    sectionSubtitle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        marginBottom: 5,
        marginTop: 10,
        width: '90%',
        textAlign: 'left',
    },
    //!Contenedor para el formulario
    contForm: {
        width: '90%',
        gap: 20,
        alignItems: 'center',
        marginBottom: 30,
    },
    //?TextInputs
    input: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        fontSize: 16,
        paddingHorizontal: 20,
        backgroundColor: MyColors.placeholder,
        color: 'black', 
    },
    //?Text Area
    textAreaInput: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: MyColors.placeholder,
        textAlignVertical: 'top',
        color: 'black', 
    },
    //!Contenedor de los checkbox camello
    contCheckboxs: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
    },
    //?Alineamos los checkbox en fila
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    //?Checkboxs
    checkbox: {
        width: 20,
        height: 20,
        marginRight: 8,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: 'black',
    },
    //*Texto frente de los Checkbox
    label: {
        fontSize: 15,
        color: 'black',
    },
    //!Contenedor de los checkbox camello
    contCheckboxsHabilidades: {
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    checkboxRowGrid: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%',
        marginBottom: 10,
    },
    //!boton para adjuntar 
    attachButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0E0E0',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10,
        marginBottom: 20,
        width: '100%',
    },
    attachButtonText: {
        fontSize: 16,
        color: 'black',
        marginRight: 10,
    },
    //!Contenedor del botón
    botonContainerNext: {
        width: '90%',
        alignItems: 'center',
        marginBottom: 40,
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
    },
    //*Texto del boton
    textoBoton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
    },
});