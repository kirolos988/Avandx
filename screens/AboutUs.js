import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

const AboutUs = () => {
    return (
        <View style={styles.aboutUsView}>
            <Image
                source={require('../assets/1-removebg-preview.png')}
                resizeMode="contain"
                style={styles.logoImg}
            />
            <Text style={styles.aboutCompany}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </Text>
            <Text style={[styles.meet, styles.text]}>MEET</Text>
            <Text style={[styles.ourTeam, styles.text]}>OUR TEAM</Text>
            <Image
                source={require('../assets/16.png')}
                style={styles.x}
                resizeMethod="resize"
                resizeMode="contain"
            />
            <Text style={[styles.ourTeam, styles.text]}>LOREM IPSUM</Text>
            <Text style={styles.aboutCompany}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutUsView: {
        backgroundColor: '#b7131e',
        height: height,
    },
    logoImg: {
        width: width * 0.8,
        alignSelf: 'center',
    },
    aboutCompany: {
        color: '#fff',
        width: width * 0.8,
        alignSelf: 'center',
        textAlign: 'center',
        opacity: 0.5,
        marginVertical: 20,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    meet: {
        marginTop: 20,
        fontSize: 70,
    },
    ourTeam: {
        marginBottom: 20,
        fontSize: 35,
    },
    x: {
        alignSelf: 'center',
        width: width * 0.25,
        height: height * 0.2,
    },
})

export default AboutUs
