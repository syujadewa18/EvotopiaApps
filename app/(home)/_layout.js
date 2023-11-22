import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index';
import Employees from './employees';
import adddetails from './adddetails';
import markattendance from './markattendance';
import User from './[user]';
import Summary from './summary';
import Login from '../../login/Login'; // Sesuaikan path dengan struktur folder yang benar


const Stack = createStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={Index} />
      <Stack.Screen name="employees" component={Employees} />
      <Stack.Screen name="adddetails" component={adddetails} />
      <Stack.Screen name="markattendance" component={markattendance} />
      <Stack.Screen name="[user]" component={User} />
      <Stack.Screen name="summary" component={Summary} />
    </Stack.Navigator>
  );
}
