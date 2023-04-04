import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleEmailChange = (text) => {
        setEmail(text);
    };
    const handlePasswordChange = (text) => {
        setPassword(text);
    };
    const handleLogin = () => {
        // Handle registration logic here
        navigation.navigate('Mangas');
    };

    return (
        <View style={{ backgroundColor: 'rgb(245, 118, 184)', height: '100%' }}>
            <View>
            <View style={{ width: '100%', height: 120, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'rgb(63, 61, 62)' }}>
                <Image source={{ uri: 'https://i.postimg.cc/r0py0TmR/logo.png' }} style={{ width: 50, height: 50, marginTop: 40, marginRight: 20 }} />
            </View>
            <View style={{width:'100%',height:20}}>
            <Text style={{color:'rgb(63, 61, 62)',fontSize:30,fontWeight:'bold', position:'absolute',textAlign:'center',marginTop:30,marginLeft:15}}>¡ GOOD TO SEE YOU AGAIN !</Text>
            </View>
            <View >
            <Image source={require('../../assets/backgroundRegister.png')} style={{width:350,height:500, marginLeft:30,borderRadius:50, marginTop:100}}/>
                <View style={{marginTop:250,position:'absolute',width:280, backgroundColor:'#5552539f',marginLeft:65,}}>
                <TextInput style={{height:80,color:'rgb(255, 255, 255)',fontSize:20}} placeholder="Email"placeholderTextColor="white"keyboardType="email-address" value={email} onChangeText={handleEmailChange}/>
                <TextInput style={{height:80,color:'rgb(255, 255, 255)',fontSize:20}} placeholder="Password"placeholderTextColor="white" secureTextEntry value={password} onChangeText={handlePasswordChange}/>
                <TouchableOpacity  title="Login"  onPress={handleLogin} style={{ backgroundColor: 'gray', borderRadius: 10, padding: 10, height:50,}}  >
                <Text style={{ marginLeft:100, width: 150, fontSize: 20, height: 50, color: 'rgb(245, 118, 184)' }}>LOGIN</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
           
        </View>

    );
}

