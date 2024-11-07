import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeladeLogin from './TeladeLogin';
import TeladeCadastro from './TeladeCadastro';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TeladeLogin} />
        <Stack.Screen name="Cadastro" component={TeladeCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;