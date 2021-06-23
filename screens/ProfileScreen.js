import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, Modal } from 'react-native'
import Card from '../component/UI/Card';



const ProfileScreen = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { userId, userId1, userId2, userId3, userId4 } = route.params;
   
    return (
        <View> 
             <Image style={{ width: 50,  height: 50, backgroundColor:'gray', borderRadius:50, marginLeft:10}} alt="profile"/>    
            <Card style={styles.screen}> 
           <Text>{userId}</Text>
           <Text>{userId1}</Text>
           <Text>{userId2}</Text>
           <Text>{userId3}</Text>
           
           </Card>  
           

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({   
        screen:{             
            marginTop:8,
            marginBottom:1,
            padding:20,
            borderRadius:1,
            paddingBottom:30,
            backgroundColor:'gray' 
              },
    })
