import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import  { useState } from 'react';
import {  Text,Image, ImageBackground, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, TouchableNativeFeedback, Alert } from 'react-native';

function Login({navigation}) {

    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const validateUser = async() =>
    {
        const allUsers = await AsyncStorage.getAllKeys();
        
        
        if(allUsers.includes(JSON.stringify(username)))
        {
            const currentUserPassword = await AsyncStorage.getItem(JSON.stringify(username))
            if(JSON.stringify(currentUserPassword)  == JSON.stringify(password))
            {  
                try {
                    
                    navigation.navigate('WelcomeScreen')
                   
                    
                } catch (error) {
                    return;
                    
                }
                    
            }
            else
            {
                Alert.alert('Login Failed',"Username and Password doesn't match")
            }
        }
        else{
                Alert.alert('Login Failed',"Invalid username")
        }
        
    }
    return (
         <SafeAreaView style={styles.background}>

        
       
             <Text style={styles.doctune}>Doctune.</Text>
        

        <Text style={styles.title}>Welcome Back!</Text>

        <Text style={styles.title}>LogIn to your account.</Text>

        <Text style={styles.title}></Text>

        <TextInput style={styles.input}
        
        placeholder= "Username"
        onChangeText={(val) => setUsername(val)}
        />

        <TextInput secureTextEntry={true}
        style={styles.input}
        onChangeText={(val) => setPassword(val)}
        placeholder= "Password"
        />

        

        <TouchableOpacity style={styles.button}
        activeOpacity={0.8}
        onPress={validateUser}>
        <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

         <Text marginTop={30}
         onPress={()=>navigation.navigate('Registration')}>Don't have an account? Register</Text>

       
        

        </SafeAreaView>
       
    );
}

const styles = StyleSheet.create({

    background : {
        
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        
        
    },
    card: {
        
        width: "80%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        elevation: 1,
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 2}
        
        

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
        marginBottom: 100
    },
     doctune : {

        color : "#0d5b7d",
        fontSize: 70,
        width: "60%",
        marginBottom:60,
        fontWeight: 'bold',
    

    },
      title : {
        fontSize:30,
        marginBottom:5,
        fontWeight:'bold',
        alignItems: 'center',
        color:'#2c8f7c',
        justifyContent: 'center'
        
    }


})

export default Login;