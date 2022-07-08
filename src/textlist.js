import React from "react";
import {View,Text,StyleSheet} from "react-native";

const Textlist = ({alpahbet}) => {
    return (
        alpahbet.map((item,idx) =>( 
            <View>
                <Text style={styles.mainText} key={idx}>{item}</Text>
            </View>
            )
        )
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'orange',
        padding: 20,
        margin:20,
        backgroundColor:'pink'
    }
})

export default Textlist;