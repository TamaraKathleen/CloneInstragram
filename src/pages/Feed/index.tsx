import React from 'react';
import {
    View,
    SafeAreaView,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';


function Feed() {
    const posts = [
        {
            id: '1',
            author: 'pedro.123',
            picture_url:
                'https://s2.glbimg.com/MP1cqZX8GTRk9E9HDkh7GrDfRa4=/0x0:607x426/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/r/9/zz0RUFSraX6NAGUSbnWw/2021-04-30-gettyimages-1157159213.jpg',
            likes: 1272,
            description: 'Hora do Descanso',
            hashtags: '#setupGamer #pc #jogos',
            place: 'Far Far Away'
        },
        {
            id: '2',
            author: 'kathleen.tamara',
            picture_url:
                'https://www.uninter.com/noticias/wp-content/uploads/2021/09/noticias_trees-3822149_1920-1024x682.jpg',
            likes: 784,
            description: 'Admirando a natureza',
            hashtags: '#natureza #beleza',
            place: 'Parque'
        },
        {
            id: '3',
            author: 'maria.maria',
            picture_url:
                'http://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg',
            likes: 397,
            description: 'Saiu o filme rei leão!!!',
            hashtags: '#cinema #reileao',
            place: 'Cinema do Shopping'
        }
    ];

    function renderItem({ item: post }: any) {
        return (
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: post.picture_url }}
                        />
                        <Text style={styles.author}>{post.author}</Text>
                        {/* <Text style={styles.place}>{post.place}</Text> */}
                    </View>

                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/options.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Image
                        style={styles.picture_url}
                        source={{ uri: post.picture_url }}
                    />
                </View>

                <View style={styles.footer}>
                    <View style={styles.actions}>
                        <View style={styles.leftActions}>
                            <TouchableOpacity style={styles.action}>
                                <Image source={require('../../../assets/like.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={require('../../../assets/comment.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/send.png')} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/save.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.likes}>{post.likes} likes</Text>
                        <Text style={styles.hashtags}>{post.hashtags}</Text>
                        <Text style={styles.description}>{post.description}</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <FlatList
                data={posts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    post: {
        marginVertical: 15
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 15
    },
    postOptions: {},
    userInfo: {
        flexDirection:"row", 
        alignItems: "center"
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10
    },
    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    place: {
        fontSize: 12,
        color: '#666',
        
    },
    picture_url: {
        width: '100%',
        height: 400
    },
    footer: {
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    action: {
        marginRight: 8
    },
    leftActions: {
        flexDirection: 'row'
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 14
    },
    hashtags: {
        color: '#002D5E'
    },
    description: {
        color: '#000',
        lineHeight: 18
    }
});

export default Feed;