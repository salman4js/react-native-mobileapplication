import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';

const AppContent = (props) => {

    return (
        <View style={styles.view}>
            <Text style={styles.headlines}>
                Headlines
            </Text>
            <Text style={styles.headline}>
                {props.headline}
            </Text>
            <Text style={styles.headlines}>
                Description
            </Text>
            <Text style={styles.headline}>
                {props.description}
            </Text>
            <Text style = {styles.headlines}>
                Click Here For Elaboration
            </Text>
            <Text style = {styles.link} onPress={ ()=> Linking.openURL(props.link) }>
                {props.link}
            </Text>
        </View>





    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontSize: 15,
        width: '21%',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        marginBottom : 15,
        color : 'white',
        paddingRight : 50
    },
    headlines: {
        fontSize: 16,
        paddingHorizontal: 10,
        color: '#fff',
        fontWeight: 'bold',
        textDecorationLine : "underline",
        marginBottom : 8
         
    },
    
    link : {
        fontSize: 15,
        width: '20%',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        color : 'rgba(12, 197, 207, 0.86)',
        marginBottom : 20,
        textDecorationLine : "underline",
        paddingRight : 50

    },
    view: {
        backgroundColor: 'rgba(32, 63, 120, 0.86)',
        paddingBottom: 5,
        paddingTop: 5,
        marginBottom: 20
    }
})

export default AppContent;