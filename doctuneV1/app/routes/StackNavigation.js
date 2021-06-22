import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native"
import RegistrationScreen from '../screens/RegScreen'
import React from 'react';
import Login from "../screens/Login"
import WelcomeScreen from '../screens/WelcomeScreen'

const Stack = createStackNavigator();

function myStack()
{
  return (
      <NavigationContainer>
          <Stack.Navigator>

           

           
              <Stack.Screen
                  name= "Registration"
                  component={RegistrationScreen}
                  options={{headerShown:false}}
                    />

                    <Stack.Screen
                   name="Login"
                  component={Login}
                  options={{headerShown:false}}/>

                  <Stack.Screen
                      name="WelcomeScreen"
                      component={WelcomeScreen}
                      options={{headerShown:false}}
                  />

                  

                 


              </Stack.Navigator>
      </NavigationContainer>
  )
}



export default myStack;