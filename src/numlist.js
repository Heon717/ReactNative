import React, {Component,useState} from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Numlist = ({list,removeNum}) => {
    return (
        list.map((item,index)=> (
            <TouchableOpacity style={styles.numlist} key={index} onPress={()=>removeNum(index)}>
                <Text>{item}</Text>
            </TouchableOpacity>
            )
        )
    );
}

const styles = StyleSheet.create({
    numlist: {
        backgroundColor: '#cecece',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        marginTop: 5
    }
})

export default Numlist;