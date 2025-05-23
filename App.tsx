import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/view/home/Home';
import { TypePorfleScreen } from './src/view/typePorfile/TypePorfle';
import { RegisterScreen } from './src/view/Register/Register';

export type RootStackParamList = {
    HomeScreen: undefined,
    TypePorfleScreen: undefined,
    RegisterScreen: undefined,
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
                <Stack.Screen name='TypePorfleScreen' component={TypePorfleScreen}/>
                <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;