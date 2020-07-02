import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, WelcomeAuth, Register, Login } from '../../containers/pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}  />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
        </Stack.Navigator>
    );
};

export default Router;