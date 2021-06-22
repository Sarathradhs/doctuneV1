import { SafeAreaView, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Value } from 'react-native-reanimated';


function RegScreen({navigation}) {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

const storeData = async () =>
{
    const allKeys = await AsyncStorage.getAllKeys();
    console.log(allKeys)
    if(allKeys.includes(JSON.stringify(email)) || JSON.stringify(password) !== JSON.stringify(confirmPass)) 
    {
        Alert.alert('SignUp Failed',"Username might be already taken or the Password you entered doesn't match")
    }
    else
    {
      try {

        await AsyncStorage.setItem(JSON.stringify(email), password)
        navigation.navigate('Login')
        console.log('async storage success')
        
    } catch (error) {
        console.log('async storage err')
    }
    }
   
    
    
}

   
    return (

        <SafeAreaView style={styles.background}>


        <Text style={styles.doctune}>Doctune.</Text>
       

        <Text style={styles.title}>Hello. SignUp here.</Text>


        <Text style={styles.title}></Text>


        

        <TextInput style={styles.input}
            placeholder="Email"
            onChangeText={(val) => setEmail(val)}
            keyboardType="email-address"
        />
        <TextInput style={styles.input}
        secureTextEntry={true}
            placeholder="Password"
            onChangeText={(val) => setPassword(val)}
        />
        <TextInput 
        style={styles.input}
        secureTextEntry={true}
            placeholder="Confirm Password"
            onChangeText={(val) => setConfirmPass(val)}
            
        />
        
        <TouchableOpacity style={styles.button}
        activeOpacity={0.8}
        onPress={storeData}
        >
        <Text style={styles.text}>SignUp</Text>
        </TouchableOpacity>


        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>navigation.navigate('Login')}>
        <Text marginTop={30}>Already a member? Login instead</Text>
        </TouchableOpacity>


        </SafeAreaView>
        
    );


}


const styles = {

    background : {
        
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        
        alignItems: "center",
        justifyContent: "center"
        
    },
    doctune : {

        color : "#0d5b7d",
        fontSize: 70,
        width: "60%",
        marginBottom:10,
        fontWeight: 'bold',
    

    },
    input : {

        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
        margin: 5,
        width: 230,
        height: 45
        
        
    },
     button : {
        backgroundColor:"#2c8f7c",
        borderRadius: 5,
        width:230,
        justifyContent: "center",
        alignItems:"center",
        height:45,
        marginTop:20,
        margin: 10
    },
    text : {
        color: "#fff",
        fontSize: 14
    },
    logoImage : {
        width: 150,
        height: 150,
        margin: 40,
        marginBottom : 70
    },
    title : {
        fontSize:30,
        marginBottom:10,
        fontWeight:'bold',
        color:'#2c8f7c'
        
    },
    error:{
        fontSize:15,
        color:'#d10020'

    }
}

export default RegScreen;