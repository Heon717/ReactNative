import React, {Component,useState} from "react";
import {View,Text,StyleSheet,TextInput} from 'react-native';

const Input = () => {
    const [text,setText] = useState('');

    const onChangeInput = (e) => {
        setText(e);
    }

    return(
        <View style={styles.mainView}>
            <TextInput value={text} style={styles.input} 
            onChangeText={onChangeInput}
            multiline={true}
            maxLength={50}
            autoCapitalize={'none'}
            editable={true}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 10
    },
    mainView: {
        width: '100%',
    }
})

export default Input;