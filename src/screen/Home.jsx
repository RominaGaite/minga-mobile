
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
//import Video from 'react-native-video';
import { Video } from "expo-av";
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation();

    return (

        <View style={{ backgroundColor: 'rgb(245, 118, 184)', height: '100%' }}>
            <View style={{ width: '100%', height: 120, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(63, 61, 62)' }}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'rgb(245, 118, 184)', height: 'auto', marginTop: 40, marginLeft: 20 }}>MINGA</Text>
                <Image source={{ uri: 'https://i.postimg.cc/r0py0TmR/logo.png' }} style={{ width: 50, height: 50, marginTop: 40, marginRight: 20 }} />
            </View>
            <View style={{alignItems:'center'}} >
                <Video
                    source={ require('../../assets/video/manga.mp4') }
                    style={{ width: '100%', height: '100%' }}
                    rate={1.0}
                    volume={0.0} // mute
                    isMuted={true} // mute
                    resizeMode="cover"
                    shouldPlay
                    isLooping // loop
                    useNativeControls={false}
                    onError={(error) => console.log(error)}
                />
                <TouchableOpacity style={{ position: 'absolute',marginTop:100, backgroundColor: '#bcbbbc84', height: 50, width: '100%' }}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: 'rgb(255, 118, 184)', fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>REGISTER</Text>
                </TouchableOpacity>
                <Text style={{ color: 'rgb(255, 118, 184)', fontSize: 40,fontWeight:'bold', textAlign: 'center', position: 'absolute', marginTop: 300 }}>
                    Welcome to our amazing manga app!
                </Text>
                <TouchableOpacity style={{ position: 'absolute',marginTop:550, backgroundColor: '#bcbbbc84', height: 50, width: '100%' }}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: 'rgb(255, 118, 184)', fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>LOGIN</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}
