import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { View, Text, StyleSheet } from 'react-native';
import {MaterialIcons, Entypo, Feather } from '@expo/vector-icons';

import Inicio from '../pages/Home'
import CadEvento from '../pages/CadEvento'
import Ajudar from '../pages/Ajudar'
import Perfil from '../pages/Perfil'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from '../pages/Home';
import { TouchableHighlight } from 'react-native-web';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ Routes }) => ({
                tabBarStyle: {
                    backgroundColor: '#1E90FF',
                    Colors: '#000',
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,

                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#ffff'

            })
            }
        >

            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Novo Evento"
                component={CadEvento}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="event" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Ajudar"
                component={Ajudar}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="help-with-circle" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Inicio"
                component={Tabs}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

