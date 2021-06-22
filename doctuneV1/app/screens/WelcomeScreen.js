import React from 'react';
import {useState} from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, Image, Alert, View } from 'react-native';
import * as Location from 'expo-location';

function WelcomeScreen({navigation}) {

  const [lat, setLatitude] = useState();
  const [long, setLongitude] = useState()
  const [ErrMsg, setErrMsg] = useState(null);

  const getCurrentLocation = async () =>
  {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted')
        {
            setErrMsg('Permission Denied')
            return;
        }

        let location = await Location.getCurrentPositionAsync({})
    
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);

        
  }
    return (
        <SafeAreaView style={styles.background}>

        <View style={styles.view}>

        <Text
        style={styles.title}>Welcome to</Text>

        <Text
        style={styles.doctune}>Doctune.</Text>

       

        
        </View>

        <View
        style={styles.view2}>

        <Text style={styles.text2}>{JSON.stringify(lat)} : {JSON.stringify(long)} </Text>



        <TouchableOpacity style={styles.button}
        activeOpacity={0.8}
        onPress={getCurrentLocation}
        
        >
        <Text 
        style={styles.text}>Current Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutBtn}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Login')}
        
        
        >
        <Text 
        style={styles.text}>LogOut</Text>
        </TouchableOpacity>

        </View>

        

        </SafeAreaView>
    );
}

const styles = {

    background : {
        
        backgroundColor: "#fff",
        flex:1,
        
        width: "100%",
        height: "100%",
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "flex-start"
        
    },

    view : {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginLeft : 10,
        flexDirection:"column",
        alignItems: "flex-start",
    },
    view2 : {
        alignItems: "flex-start",
        justifyContent: "center",
        width:'100%',
        flexDirection:"column",
        alignItems: "center",
    },

    title : {
        color : "#2598ee",
        fontSize: 40,
        width: "100%",
    fontWeight: 'bold',
    top:100,
   
     
    },
    button : {
        backgroundColor:"#2c8f7c",
        borderRadius: 5,
        width:230,
        top: 400,
        justifyContent: "center",
        alignItems:"center",
        height:45,
        
    },
     logoutBtn : {
        backgroundColor:"#2c8f7c",
        borderRadius: 5,
        width:130,
        top: 550,
        justifyContent: "center",
        alignItems:"center",
        height:30,
        
    },


    doctune : {

        color : "#022628",
        fontSize: 70,
        width: "100%",
    fontWeight: 'bold',
    top:100,
    

    },
     text : {
        color: "#fff",
        fontSize: 14
    },
    text2 :
    {
        top: 350,
        fontSize: 20,
        
    }

    
}

export default WelcomeScreen;