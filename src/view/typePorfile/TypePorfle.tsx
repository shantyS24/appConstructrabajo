import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

export const TypePorfleScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style= {styles.circuloFigures}>
                <View style={styles.circulo}></View>
                <View style={styles.circulo2}></View>
            </View>
            <View style={styles.viewBack}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Image 
                    style = {styles.imgBack}
                    source={require('../../../assets/back.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.headerText}>
                <Text style={styles.titulo}>
                    Tipo de Perfil
                </Text>
                <Text style={styles.texto}>
                    {'Selecciona el tipo de perfil para constructrabajo'}
                </Text>
            </View>
            <View style={styles.contenedorOptions}> 
                <View style={styles.viewTypePorfile}>
                    <Image 
                    style = {styles.imgTypePorfile}
                    source={require('../../../assets/userIcon.png')}/>
                    <TouchableOpacity style={styles.botonUserSolicitante} onPress={() => alert('Pere que aun esta en desarrollo')}>
                        <Text style={styles.textUserSolicitante}>
                            Usuario Solicitante
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTypePorfile}>
                    <Image 
                    style = {styles.imgTypePorfile}
                    source={require('../../../assets/employerIcon.png')}/>
                    <TouchableOpacity style={styles.botonUserSolicitante} onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.textUserSolicitante}>
                            Usuario Trabajador
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTypePorfile}>
                    <Image 
                    style = {styles.imgTypePorfile}
                    source={require('../../../assets/ferreteria.png')}/>
                    <TouchableOpacity style={styles.botonUserSolicitante} onPress={() => alert('Pere que aun esta en desarrollo')}>
                        <Text style={styles.textUserSolicitante}>
                            Ferreteria / Almacen
                        </Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: MyColors.third,
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
    viewBack: {
        position: 'absolute',
        left: 20,
        top: 70,
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
    imgBack:{
        width: 40,
        height: 40,
    },
    contenedorOptions:{
        marginTop: 200,
    },
    viewTypePorfile: {
        margin:30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgTypePorfile:{
        width: 80,
        height: 80,
    },
    botonUserSolicitante: {
        margin: 20,
        marginLeft:50,
        width: 150,
        height:80,
        backgroundColor: MyColors.primary,
        opacity: .6,
        paddingHorizontal: 25,
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 6,
    },
    textUserSolicitante:{
        fontSize: 18,
        fontWeight: 500,
        color: MyColors.borderFigures,
    },
});