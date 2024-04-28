import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

const Home = ({navigation}) => {
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <Image source={require('../assets/Logo.png')} resizeMode='contain' style={{width: width}}/>
            <ImageBackground
                source={require('../assets/12-removebg.png')}
                style={styles.img1}
            >
                <View style={styles.box1}>
                    <Text style={styles.title}>About Us</Text>
                    <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('aboutUs')}>
                        <Text style={styles.btnText}>MORE</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <ImageBackground
                source={require('../assets/13.png')}
                style={styles.img2}
            >
                <View style={styles.box2}>
                    <Text style={styles.title}>Services</Text>
                    <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>MORE</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <ImageBackground
                source={require('../assets/14.png')}
                style={styles.img1}
            >
                <View style={styles.box1}>
                    <Text style={styles.title}>Contacts</Text>
                    <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>MORE</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <ImageBackground
                source={require('../assets/15.png')}
                style={styles.img2}
            >
                <View style={styles.box2}>
                    <Text style={styles.title}>Clients</Text>
                    <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>MORE</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    img1: {
        height: height * 0.5,
        width: width,
        left: -width * 0.4,
        marginBottom: height * 0.025,
    },
    box1: {
        borderWidth: 12,
        borderColor: '#b7131e',
        borderLeftWidth: 0,
        width: width * 0.6,
        height: 'auto',
        alignItems: 'center',
        left: width * 0.8,
        paddingLeft: 65,
        paddingRight: 20,
    },
    img2: {
        height: height * 0.5,
        width: width,
        right: -width * 0.4,
        marginBottom: height * 0.025,
    },
    box2: {
        borderWidth: 12,
        borderColor: '#b7131e',
        borderRightWidth: 0,
        width: width * 0.6,
        height: 'auto',
        alignItems: 'center',
        left: -width * 0.4,
        paddingRight: 65,
        paddingLeft: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#b7131e',
        paddingBottom: 15,
        marginTop: 20,
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#b7131e',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: width * 0.2,
        height: height * 0.03,
        marginVertical: height * 0.02,
    },
    btnText: {
        fontSize: 24,
        fontWeight: 'bold',
        left: width * 0.05,
        top: height * 0.01,
    },
})

export default Home
