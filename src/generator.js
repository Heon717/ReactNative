import React, {Component,useState} from "react";
import {View,Text,StyleSheet,Button} from 'react-native';

const Generator = ({randomNum}) => {
    return (
        <View style={styles.button}>
            <Button
                title="Add Number"
                onPress={()=>randomNum()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D197CF',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})

export default Generator;