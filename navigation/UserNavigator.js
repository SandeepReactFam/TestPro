import React from 'react'
import ProfileScreen from "../screens/ProfileScreen"
import UserListScreen from "../screens/UserListScreen"
import { createStackNavigator } from "@react-navigation/stack"

const UserStack=createStackNavigator();
 export const UserNavigator = () => {
    return (            
        <UserStack.Navigator>
             <UserStack.Screen name="UserList" component={UserListScreen}/>
             <UserStack.Screen name="Profile" component={ProfileScreen}/>        
        </UserStack.Navigator>
       
    )
}


