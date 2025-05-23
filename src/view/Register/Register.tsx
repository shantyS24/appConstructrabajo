import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import Checkbox from 'expo-checkbox';




export const RegisterScreen = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [isChecked, setChecked] = useState(false);

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
                    onChangeText={onChangeText}
                    placeholder="Nombres"
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Apellidos"
                    value={text}
                />
                <Text>Tipo de documento de Identidad</Text>
                <View style={styles.contCheckboxs}>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>C.C</Text>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>C.E</Text>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>PPT</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Correo Electronico"
                    keyboardType='email-address'
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    placeholder="Numero de Identidad"
                    keyboardType='numeric'
                    value={number}
                />
            </View>
            <View style = {styles.viewBotonNext}>
                <TouchableOpacity style={styles.botonSiguiente} onPress={() => navigation.navigate('RegisterScreen')}>
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
    height: 65,
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
    }

});
