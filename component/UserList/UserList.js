import React from 'react';
import { StyleSheet, Text, View , Platform,Image, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import Card from '../UI/Card'

let TouchableCmp = TouchableOpacity;
  
if (Platform.OS === 'android' && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback;
}


const UserList = (props) => {
    return (
      <View>
          <TouchableCmp useForeground onPress={props.onSelect}>
            <Card style={styles.screen}>           
                <View style={styles.UserContent}>
                       <Image style={{ width: 50,  height: 50, backgroundColor:'gray', borderRadius:50}} source={{uri:props.picture}} alt="picture"/>                   
                   <View style={styles.list}>
                      <Text style={styles.firstname}>{props.firstName}</Text>
                      <Text style={styles.surname}>{props.surName}</Text>
                    </View>
                </View>
               
           </Card>
        </TouchableCmp>
      </View>
      
    )
}

export default UserList

const styles = StyleSheet.create({
    screen:{             
        marginTop:8,
        marginBottom:1,
        padding:20,
        borderRadius:1,
        paddingBottom:30  
          },
    userContent:{
        flex:1,    
        flexDirection:'row',
        paddingBottom:30           
            
               },
    list:{
         marginLeft:70,
         marginTop:-40,       
    
        },
})
