import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import actions from '../Store/Manga/actions.js'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const { captureManga, captureChapter } = actions;

function MangaDetailsScreen({route}) {
    const manga = route.params && route.params.manga;
    const page = Number(useParams().page)
    const dispatch = useDispatch()
    const [pagina, setPagina] = useState(0);
    const [chapter, setChapter] = useState({});
    let chapters = useSelector(store => store.mangas.chapter);
    const mangas = useSelector(store => store.mangas.manga); 
   
      useEffect(() => {
        if (manga) dispatch(captureManga({ manga_id: manga }));
        if (manga) dispatch(captureChapter({ manga_id: manga, page: pagina }));
      }, [manga, pagina, chapters]);

    return (
        <ScrollView style={{ backgroundColor: 'rgb(245, 118, 184)' }}>
            <View style={{ width: '100%', height: 120, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(63, 61, 62)' }}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'rgb(245, 118, 184)', height: 'auto', marginTop: 20 }}>{mangas?.title}</Text>
                <Image source={{ uri: 'https://i.postimg.cc/r0py0TmR/logo.png' }} style={{ width: 50, height: 50, marginRight: 20, marginTop: 20 }} />
            </View>
            <Image source={{ uri: mangas?.cover_photo }} style={{ width: '100%', height: 400, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 100, borderBottomRightRadius: 100, backgroundColor: 'rgb(63, 61, 62)' }} />
            <View style={{ width: '100%', height: 70, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ textAlign: 'center', borderRadius: 50, width: 150, margin: 30, fontSize: 30, height: 50, backgroundColor: 'rgb(63, 61, 62)', color: 'rgb(245, 118, 184)' }}>{mangas.author_id?.name}</Text>
                <Text style={{ textAlign: 'center', borderRadius: 50, width: 150, margin: 30, fontSize: 30, height: 50, backgroundColor: 'rgb(63, 61, 62)', color: 'rgb(245, 118, 184)' }}>{mangas.category_id?.name}</Text>
            </View>
            <Text style={{ textAlign: 'justify', margin: 20, fontSize: 20, height: 'auto', color: 'rgb(248, 246, 247)' }}>{mangas?.description}</Text>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 20, color: 'rgb(248, 246, 247)' }}>{chapter?.name}</Text>
            </View>
            <View>
                {chapters?.length > 0 ?
                    chapters?.map(chapter => (
                        <View key={chapter?._id} style={{ alignItems: 'center', justifyContent: 'center', margin: 20 }}>
                            <Image style={{ width: 300, height: 300, borderRadius: 40 }} source={{ uri: chapter?.manga_id.cover_photo }} alt={chapter?.title} />
                            <Text style={{ textAlign: 'justify', margin: 20, fontSize: 30, height: 'auto', color: 'rgb(248, 246, 247)' }}>{chapter.title}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Chapter', { chapterId: chapter?._id, page: 0 })} >
                                <Text style={{ textAlign: 'center', borderRadius: 50, width: 150, margin: 30, fontSize: 30, height: 50, backgroundColor: 'rgb(63, 61, 62)', color: 'rgb(245, 118, 184)' }}>READ</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                    :
                    null}
                <View style={{ width: '100%', height: 70, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(63, 61, 62)' }} >
                    {pagina !== 1 && (
                        <TouchableOpacity onPress={() =>'/manga/' + manga._id  +  setPagina(pagina - 1)}
                            style={{ textAlign: 'center', width: 150, height: 30, color: 'rgb(245, 118, 184)' }}>
                            <Text style={{ textAlign: 'center', width: 150, fontSize: 20, height: 50, backgroundColor: 'rgb(63, 61, 62)', color: 'rgb(245, 118, 184)' }}>Prev</Text>
                        </TouchableOpacity>
                    )}
                    {chapters?.length === 4 && (
                        <TouchableOpacity onPress={() =>'/manga/' + manga._id  +  setPagina(pagina + 1)} 
                            style={{ textAlign: 'center', width: 150, height: 30, color: 'rgb(245, 118, 184)' }}>
                            <Text style={{ textAlign: 'center', width: 150, fontSize: 20, height: 50, backgroundColor: 'rgb(63, 61, 62)', color: 'rgb(245, 118, 184)' }}>Next</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ScrollView>
    )
}
export default MangaDetailsScreen