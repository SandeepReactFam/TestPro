import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import UserList from '../component/UserList/UserList'
import { USERS } from '../data/dummy-data'

const UserListScreen = (props) => {
   const renderUserList=(itemData)=>{
        return(
            <UserList            
            picture={itemData.item.picture}
            firstName={itemData.item.firstname}
            surName={itemData.item.surname}
            onSelect={()=>{props.navigation.navigate('Profile',{ 
                 userId:itemData.item.firstname,
                 userId1:itemData.item.surname,
                 userId2:itemData.item.email,
                 userId3:itemData.item.phone,
                 userId4:itemData.item.picture             
                    }
            )}}
            />
        )
    }
    return (
        <View>
            <View style={styles.input}>
               <TextInput placeholder="Search User"
               onChangeText={()=>{}}
               />
            </View>
       <FlatList
            keyExtractor={(item, index)=>item.id}
            data={USERS}
            renderItem={renderUserList}
            
            />
        </View>
    )
}

export default UserListScreen

const styles = StyleSheet.create({
    input:{
        borderWidth:.01,
    }
})
