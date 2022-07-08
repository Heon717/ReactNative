import React, { useState } from "react";
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const PickerComponent = () => {

    const [country,setCountry] = useState('');
    const [sliderVal,setSliderVal] = useState();

    return (
        <View style={styles.container}>
            <Slider
                style={{height:40,width:300}}
                value={sliderVal}
                minimumValue={0}
                maximumValue={100}
                onValueChange={(val)=>{setSliderVal(val)}}
                maximumTrackTintColor='red'
                minimumTrackTintColor="blue"
                step={1}
            />
            <Text style={styles.input}>{sliderVal}</Text>
            <ActivityIndicator
                style={{paddingTop:100}}
                size="large"
                color="green"
                animating={false}
            />
            <Picker 
                style={{height: 50, width: 250}}
                selectedValue={country}
                onValueChange={(val,idx)=>{
                    setCountry(val);
                }}
            >
                <Picker.Item label="Korea" value="Korea"/>
                <Picker.Item label="China" value="China"/>
                <Picker.Item label="Japan" value="Japan"/>
            </Picker>
        </View>
    );
}



const styles = StyleSheet.create({
    container : {
        flex:1,
        paddingTop:20,
        marginBottom:200,
        alignItems:'center'
    },
    input: {
        width: "100%",
        marginTop: 20,
        fontSize: 25
    }
});

export default PickerComponent;