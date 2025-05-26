import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/view/home/Home';
import { TypePorfleScreen } from './src/Presentation/view/typePorfile/TypePorfle';
import { RegisterScreenWorker } from './src/Presentation/view/Register/RegisterWorker';

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
                <Stack.Screen name='RegisterScreen' component={RegisterScreenWorker}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;