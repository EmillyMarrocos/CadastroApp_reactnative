import { NavegationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import TeladeLogin from 'TeladeLogin';
import TeladeCadastro from 'TeladeCadastro';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavegationContainer>
      <Stack.Navigator initialRouteName='LOGIN'>
      <Stack.Screen name='LOGIN' component={TeladeLogin}/>
      <Stack.Screen name='CADASTRO' component={TeladeCadastro}/>
      </Stack.Navigator>
    </NavegationContainer>
  );
};

export default App;