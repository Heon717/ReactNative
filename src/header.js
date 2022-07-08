import React, {Component,useState} from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Header = ({name}) => (
    <TouchableOpacity 
        style={styles.header}
        // onPress={()=>alert('Hello World!')}
        // onLongPress={()=>alert('Hello World!')}
        // onPressIn={()=>alert('Hello World!')}
        onPressOut={()=>alert('Hello World!')}
        >
        <View>
            <Text>This is {name}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})

export default Header;