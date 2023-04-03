import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import actions from "../Store/Text/actions.js";
import eventActions from "../Store/Comic/actions.js";
const { read_events } = eventActions;
const { captureText } = actions;

export default function MangasView() {
    const [reload, SetReload] = useState(false);
    const dispatch = useDispatch();
    const text = useRef("");
    const defaultText = useSelector((store) => store.text.text);
    const data = useSelector((store) => store.events.events);
    const categorias = useSelector((store) => store.checks.category);
    const events = useSelector((store) => store.events.events);
    const navigation = useNavigation();
     const handleSearch = () => {
        SetReload(!reload);
        dispatch(captureText({ inputText: text }));
    }; 
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    useEffect(() => {
        const loadEvents = async () => {
            await dispatch(read_events({ inputText: '', captureChecks: '', pages: page, size: pageSize }));
        };
        loadEvents();
    }, [page, pageSize]);
    const handlePrev = () => {
        setPage(page - 1);
    };
    const handleNext = () => {
        setPage(page + 1);
    };

    return (
        <ScrollView style={{ backgroundColor: 'rgb(245, 118, 184)' }}>
            <View style={{  width: '100%', height: 120, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(63, 61, 62)'}}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'rgb(245, 118, 184)', height: 'auto', marginTop: 40, marginLeft: 20 }}>Mangas</Text>
                <Image source={{ uri: 'https://i.postimg.cc/r0py0TmR/logo.png' }} style={{ width: 50, height: 50, marginTop: 40, marginRight: 20}} />
            </View>
            <View >
                <View >
                     <TextInput type="text" placeholder="  Find your manga here" ref={text} onChange={handleSearch} defaultValue={defaultText} style={{ margin: 10, borderRadius: 20, borderColor: 'rgb(63, 61, 62)', height: 40, borderWidth: 2, backgroundColor: 'rgb(255,255,255)' }}/> 
                </View>
            </View>
            <View >
                <View>
                    {events.map((event) => (
                        <View key={event.id} >
                            <View style={{ flex: 1 }}>
                                <Image source={{ uri: event.cover_photo }}style={{flex: 1, resizeMode: 'cover', position: 'absolute', width: '100%', height: '100%' }} />
                                <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.7, alignItems: 'center'}}>
                                    <Image source={{ uri: event.cover_photo }} style={{  width: 200,  height: 200, transform: [{ rotate: '55deg' }, { skewY: '-30deg' }], margin: 30 }} />
                                    <TouchableOpacity style={{ position: 'absolute', top: '40%', backgroundColor: '#bcbbbc84', height: 50, width: '100%'}}
                                        onPress={() => navigation.navigate('MangaDetails' , { manga: event?._id} )}>
                                       <Text style={{ color: 'rgb(255, 118, 184)', fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>READ</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={{ textAlign: 'center',  margin: 20, fontSize: 20, height: 'auto', color: 'rgb(248, 246, 247)' }}>{event.title}</Text>
                            </View>
                        </View> ))}
                </View>
            </View>
            <View style={{ width: '100%', height: 70, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between',  backgroundColor: 'rgb(63, 61, 62)' }} >
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <TouchableOpacity onPress={handlePrev} disabled={page === 1} style={{ textAlign: 'center', width: 150, height: 30, color: 'rgb(245, 118, 184)' }}>
                        <Text style={{ textAlign: 'center', width: 150, fontSize: 20, height: 50, backgroundColor: 'rgb(63, 61, 62)', color: 'rgb(245, 118, 184)' }}>Prev</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext} disabled={events.length < pageSize} style={{ textAlign: 'center', width: 150, height: 30, color: 'rgb(245, 118, 184)' }}>
                        <Text style={{ textAlign: 'center', width: 150, fontSize: 20, height: 50, backgroundColor: 'rgb(63, 61, 62)', color: 'rgb(245, 118, 184)' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
}



