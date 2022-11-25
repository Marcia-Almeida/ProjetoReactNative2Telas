import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import PessoasProximas from "../screens/PessoasProximas"
import Login from "../screens/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Screen
                name="Login"
                component={Login}
            />

            <Screen
                name="PessoasProximas"
                component={PessoasProximas}
            />
        </Navigator>
    )

}