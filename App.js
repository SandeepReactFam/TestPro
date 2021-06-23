import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { UserNavigator } from './navigation/UserNavigator';

export default function App() {
  return( 
   <NavigationContainer>
    <UserNavigator/>
   </NavigationContainer>
 )
}
