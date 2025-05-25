import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/view/home/Home';
import { TypePorfileScreen } from './src/view/typePorfile/TypePorfile';
import { RegisterScreen } from './src/view/Register/Register';
import { Register2Screen } from './src/view/Register/Register2';
import { Register3Screen } from './src/view/Register/Register3';

export type RootStackParamList = {
    HomeScreen: undefined,
    TypePorfileScreen: undefined,
    RegisterScreen: undefined,
    Register2Screen: undefined,
    Register3Screen: undefined,
}

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                />
                <Stack.Screen name='TypePorfileScreen' component={TypePorfileScreen}/>
                <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
                <Stack.Screen name='Register2Screen' component={Register2Screen}/>
                <Stack.Screen name='Register3Screen' component={Register3Screen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;