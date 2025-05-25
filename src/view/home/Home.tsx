import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

export const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}/*Contenedor Principal*/> 
            <View style= {styles.circuloFigures} /*Contiene los circulos de la parte superior derecha*/>
                <View style={styles.circulo} /**Circulo con color */></View>
                <View style={styles.circulo2}/**linea circular */></View>
            </View>

            <Text style={styles.titulo}/** Titulo  Principal */>
                Trabaja con Constructrabajo
            </Text>

            <Text style={styles.texto}/**Parrafo despues del titulo */>
                {'Dame el pan de cada dia \n muchoooo mas texto'}
            </Text>

            <View style= {styles.botones} /**Contenedor para los botones */>
                <TouchableOpacity style={styles.botonIngreso} onPress={() => alert('Pere que aun esta en desarrollo')}
                    /**Boton de Ingresar */>
                    <Text style={styles.textoBoton}>Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonRegistro} onPress={() => navigation.navigate('TypePorfileScreen')}
                    /**Boton de Registro */>
                    <Text style={styles.textoBotonR}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cuadroFigures} /**Contenedor de Lineas de Cuadros */>
                <View style={styles.cuadro} /**Cuadro o rectangulo */></View>
                <View style={styles.cuadro2}/**Cuadro girado a 35 grados */></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    //!Contenedor principal
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //!Contenedor Figuras
        circuloFigures: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    //?Circulo rellenado
    circulo: {
        position: 'absolute',
        top: 0,
        right: 0,
        width:200,
        height: 250,
        borderBottomLeftRadius: '100%',
        backgroundColor: MyColors.primary,
        elevation: 1,
        shadowColor: '#626f47'
    },
    //?Lineas de circulo grises
    circulo2: {
        position: 'absolute',
        top: 0,
        right: 0,
        width:300,
        height: 350,
        borderBottomLeftRadius: '100%',
        borderColor: MyColors.borderFigures,
        borderWidth: 3,

    },
    //*Titulo Principal
    titulo: {
        color: MyColors.primary,
        fontSize: 24,
        fontWeight: 'bold',
    },
    //*Parrafo
    texto: {
        marginTop: '40%',
        color: 'black',
        fontSize: 16,
        fontWeight: 400,
    },
    //!Contenedor de los botones
    botones: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 100,
    },
    //?Boton de Ingreso
    botonIngreso: {
        margin: 20,
        backgroundColor: MyColors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 6,
        //IOS sombra
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
    },
    //*Texto de Ingreso
    textoBoton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:500,
    },
    //?Boton de Registro
    botonRegistro: {
        margin: 20,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderBlockColor: 'black',
        borderWidth: 1,
        elevation: 6,

        //IOS sombra
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
    },
    //*Texto de registro
    textoBotonR: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:500,
    },
    //!Contenedor de los Cuadros
    cuadroFigures: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    //?Linea de rectangulo
    cuadro: {
        width:100,
        height: 250,
        borderColor:  MyColors.borderFigures,
        borderWidth: 3,
    },
    //?Linea de cuadro girado
    cuadro2: {
        position: 'absolute',
        bottom: 20,
        left: -100,
        width:200,
        height: 200,
        borderColor: MyColors.borderFigures,
        borderWidth: 3,
        transform: [{ rotate: '35deg' }],
    },
});

