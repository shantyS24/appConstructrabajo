import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

export const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style= {styles.circuloFigures}>
                <View style={styles.circulo}></View>
                <View style={styles.circulo2}></View>
            </View>

            <Text style={styles.titulo}>
                Trabaja con Constructrabajo
            </Text>

            <Text style={styles.texto}>
                {'Dame el pan de cada dia \n muchoooo mas texto'}
            </Text>

            <View style= {styles.botones}>
                <TouchableOpacity style={styles.botonIngreso} onPress={() => alert('Pere que aun esta en desarrollo')}>
                    <Text style={styles.textoBoton}>Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonRegistro} onPress={() => navigation.navigate('TypePorfleScreen')}>
                    <Text style={styles.textoBotonR}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cuadroFigures}>
                <View style={styles.cuadro}></View>
                <View style={styles.cuadro2}></View>
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
    circuloFigures: {
    position: 'absolute',
    top: 0,
    right: 0,
},
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
circulo2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width:300,
    height: 350,
    borderBottomLeftRadius: '100%',
    borderColor: MyColors.borderFigures,
    borderWidth: 3,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
},
titulo: {
    color: MyColors.primary,
    fontSize: 24,
    fontWeight: 'bold',
},
texto: {
    marginTop: '40%',
    color: 'black',
    fontSize: 16,
    fontWeight: 400,
},
botones: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100,
},
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
textoBoton: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight:500,
},
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
textoBotonR: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight:500,
},
cuadroFigures: {
    position: 'absolute',
    bottom: 0,
    left: 0,
},
cuadro: {
    width:100,
    height: 250,
    borderColor:  MyColors.borderFigures,
    borderWidth: 3,
},
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

