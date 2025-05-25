import React from 'react'; 
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App'; 

export const Register2Screen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Contenedor para el botón de regresar */}
            <View style={styles.viewBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    {/* La imagen de la flechita */}
                    <Image
                        style={styles.imgBack}
                        source={require('../../../assets/back.png')}
                    />
                </TouchableOpacity>
            </View>

            {/* Contenedor del título */}
            <View style={styles.headerText}>
                {/* Título */}
                <Text style={styles.titulo}>Constructrabajo</Text>
            </View>

            {/* Contenedor del formulario */}
            <View style={styles.formContainer}>
                {/* Entrada de texto para Número Telefónico */}
                <TextInput
                    style={styles.input}
                    placeholder="Número Telefónico"
                    keyboardType='numeric'
                />
                {/* Entrada de texto para Correo Electrónico */}
                <TextInput
                    style={styles.input}
                    placeholder="Correo Electrónico"
                    keyboardType='email-address'
                />
                {/* Entrada para Nueva Contraseña */}
                <TextInput
                    style={styles.input}
                    placeholder="Nueva Contraseña"
                    secureTextEntry={true} // Oculta el texto de la contraseña
                />
                {/* Entrada para Validar Contraseña */}
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Contraseña" 
                    secureTextEntry={true} // Oculta el texto de la contraseña
                />
                {/* Entrada para Referencia Personal */}
                <TextInput
                    style={styles.input}
                    placeholder="Referencia Personal"
                />
                {/* Entrada para Numero de Contacto */}
                <TextInput
                    style={styles.input}
                    placeholder="Número de Contacto"
                    keyboardType='numeric' 
                />
            </View>

            {/* Contenedor para botón de Siguiente */}
            <View style={styles.botonContainerNext}>
                {/* Botón que permite paginar a la siguiente pantalla */}
                <TouchableOpacity
                    style={styles.botonSiguiente}
                    onPress={() => navigation.navigate('Register3Screen')}
                >
                    <Text style={styles.textoBoton}>Siguiente</Text>
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
    //!Contenedor para el formulario
    formContainer: { 
        width: '90%', 
        gap: 15, 
        alignItems: 'center', 
        marginBottom: 30, 
    },
    //?TextInputs
    input: {
        height: 60, 
        width: '100%', 
        fontSize: 16,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: MyColors.placeholder, 
        color: 'black',
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
        elevation: 6, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
    },
    //*Texto del boton
    textoBoton: {
        color: 'white',
        fontSize: 18, 
        textAlign: 'center',
        fontWeight: '600', 
    },
});