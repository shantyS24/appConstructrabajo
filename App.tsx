import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/view/home/Home';
import { TypeProfileScreen } from './src/Presentation/view/typeProfile/TypeProfile';
import { RegisterScreenWorker } from './src/Presentation/view/Register/RegisterWorker';
import { Register2Screen } from './src/Presentation/view/Register/Register2';
import { Register3Screen } from './src/Presentation/view/Register/Register3';

export type RootStackParamList = {
    HomeScreen: undefined,
    TypeProfileScreen: undefined,
    RegisterScreenWorker: undefined,
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
                <Stack.Screen name='TypeProfileScreen' component={TypeProfileScreen}/>
                <Stack.Screen name='RegisterScreenWorker' component={RegisterScreenWorker}/>
                <Stack.Screen name='Register2Screen' component={Register2Screen}/>
                <Stack.Screen name='Register3Screen' component={Register3Screen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;