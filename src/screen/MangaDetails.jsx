import { View, Text, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../store/Manga/actions.js'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const { captureManga, captureChapter } = actions;
function MangaDetailsScreen() {
    const id = '6418b8f9b447d534f335807d';//aca va const {id}=useparams()-> depende de la ruta que viene de mangas
    const page = Number(useParams().page)
    const dispatch = useDispatch()
    const [pagina, setPagina] = useState(0);
    const [chapter, setChapter] = useState({});
    const [capitulo, setCapitulo] = useState(true);
    let chapters = useSelector(store => store.mangas.chapter);
    const manga = useSelector(store => store.mangas.manga);

    useEffect(() => {
        dispatch(captureManga({ manga_id: id }))
    }, [])

    useEffect(() => {
        dispatch(captureChapter({ manga_id: id, page: page }));
    }, [page, capitulo]);

    useEffect(() => {
        setChapter(chapters[0] || {});
    }, [chapters]);
    return (
        <ScrollView style={{ backgroundColor: 'rgb(245, 118, 184)' }}>
            <View style={{
                width: '100%',
                height: 70,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'rgb(63, 61, 62)'
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25,
                    color: 'rgb(245, 118, 184)',
                    height: 'auto'
                }}>{manga?.title}</Text>
                <Image
                    source={{ uri: 'https://i.postimg.cc/r0py0TmR/logo.png' }}
                    style={{
                        width: 50,
                        height: 50,
                        marginRight: 20
                    }} />
            </View>
            <Image
                source={{ uri: manga?.cover_photo }}
                style={{
                    width: '100%', height: 400,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    backgroundColor: 'rgb(63, 61, 62)',
                }}
            />
            <View style={{
                width: '100%',
                height: 70,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    textAlign: 'center',
                    borderRadius: 50,
                    width: 150,
                    margin: 30,
                    fontSize: 30,
                    height: 50,
                    backgroundColor: 'rgb(63, 61, 62)',
                    color: 'rgb(245, 118, 184)'
                }}>{manga.author_id?.name}</Text>
                <Text style={{
                    textAlign: 'center',
                    borderRadius: 50,
                    width: 150,
                    margin: 30,
                    fontSize: 30,
                    height: 50,
                    backgroundColor: 'rgb(63, 61, 62)',
                    color: 'rgb(245, 118, 184)'
                }}>{manga.category_id?.name}</Text>
            </View>

            <Text style={{
                textAlign: 'justify',
                margin: 20, fontSize: 20,
                height: 'auto',
                color: 'rgb(248, 246, 247)'
            }}>{manga?.description}</Text>

            <View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'rgb(248, 246, 247)'
                }}>{chapter?.name}</Text>
            </View>
            <View>
                {chapters?.length > 0 ?
                    chapters?.map(chapter => (
                        <View key={chapter?._id} style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 20
                        }}>
                            <Image style={{
                                width: 300,
                                height: 300,
                                borderRadius: 40
                            }}
                                source={{ uri: chapter?.manga_id.cover_photo }} alt={chapter?.title} />
                            <Text style={{
                                textAlign: 'justify',
                                margin: 20,
                                fontSize: 30,
                                height: 'auto',
                                color: 'rgb(248, 246, 247)'
                            }}>{chapter.title}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Chapter', { chapterId: chapter?._id, page: 0 })} >
                                <Text style={{
                                    textAlign: 'center',
                                    borderRadius: 50,
                                    width: 150,
                                    margin: 30,
                                    fontSize: 30,
                                    height: 50,
                                    backgroundColor: 'rgb(63, 61, 62)',
                                    color: 'rgb(245, 118, 184)'
                                }}>Read</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                    :
                    null
                }
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: 'rgb(63, 61, 62)'
                    }} >
                    {pagina !== 1 && (
                        <TouchableOpacity onPress={() =>/*'/mangas/' + manga._id  + */  setPagina(pagina - 1)} /*ver bien la ruta*/
                            style={{
                                textAlign: 'center',
                                width: 150,
                                height: 30,
                                color: 'rgb(245, 118, 184)'
                            }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    width: 150,
                                    fontSize: 20,
                                    height: 50,
                                    backgroundColor: 'rgb(63, 61, 62)',
                                    color: 'rgb(245, 118, 184)'
                                }}>prev</Text>
                        </TouchableOpacity>
                    )}

                    {chapters?.length === 4 && (
                        <TouchableOpacity onPress={() =>/*'/mangas/' + manga._id  + */ setPagina(pagina + 1)} /*ver bien la ruta*/
                        style={{
                            textAlign: 'center',
                            width: 150,
                            height: 30,
                            color: 'rgb(245, 118, 184)'
                        }}>
                            <Text style={{
                                    textAlign: 'center',
                                    width: 150,
                                    fontSize: 20,
                                    height: 50,
                                    backgroundColor: 'rgb(63, 61, 62)',
                                    color: 'rgb(245, 118, 184)'
                                }}>next</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ScrollView>
    )


}
export default MangaDetailsScreen