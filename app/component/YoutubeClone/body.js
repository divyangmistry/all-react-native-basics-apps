import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let video = this.props.video

        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: video.snippet.thumbnails.medium.url }}
                    style={{ height: 200, borderRadius: 5 }}
                />
                <View style={styles.textContainer}>
                    <Image
                        source={{ uri: video.snippet.thumbnails.default.url }}
                        style={styles.profilePic}
                    />
                    <View style={styles.innerContainer}>
                        <Text style={styles.videoTitle}>{video.snippet.title}</Text>
                        <Text style={styles.videoStatus}>{video.snippet.channelTitle} - 140 Views</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'black'
    },
    textContainer: {
        marginLeft: 10,
        paddingRight: 5,
        flexDirection: 'row',
        paddingTop: 15,
    },
    innerContainer: {
        marginLeft: 10,
        padding: 5,

    },
    videoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 4,
    },
    channelTitle: {

    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    videoStatus: {
        fontSize: 12,
        color: '#fff',
        marginTop: 5,
    }
})