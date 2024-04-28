import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

const MediaProduction = () => {
    return (
        <ImageBackground
            source={require('../assets/20.png')}
            style={styles.img}
            resizeMode="contain"
            resizeMethod="scale"
        >
            <Image
                source={require('../assets/Logo.png')}
                resizeMode="contain"
                style={{ width: width }}
            />
            <View style={styles.titleView}>
                <View style={styles.line}></View>
                <Text style={styles.media}>
                    MEDIA{'\n'}
                    <Text style={styles.production}>PRODUCTION</Text>
                </Text>
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>MORE</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    titleView: {
        flexDirection: 'row',
    },
    line: {
        backgroundColor: '#b7131e',
        width: width * 0.5,
        height: height * 0.03,
        top: height * 0.02,
    },
    media: {
        fontSize: width * 0.18,
        fontWeight: 'bold',
    },
    production: {
        fontSize: width * 0.088,
        color: '#b7131e',
    },
    img: {
        height: height,
        width: width,
        backgroundColor: '#fff',
    },
    textView: {
        width: width * 0.4,
        left: width * 0.5,
        top: height * 0.35,
        alignItems: 'center',
        marginRight: width * 0.1,
    },
    text: {
        width: width * 0.5,
        textAlign: 'justify',
    },
    btn: {
        backgroundColor: '#b7131e',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: width * 0.2,
        height: height * 0.03,
        marginTop: 20,
    },
    btnText: {
        fontSize: 24,
        fontWeight: 'bold',
        left: width * 0.05,
        top: height * 0.01,
    },
})

export default MediaProduction
