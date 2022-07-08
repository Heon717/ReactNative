import React, {Component,useState} from "react";
import {View,Text} from 'react-native';

const Props = ({num,sampleText,onAdd}) => {
  return(
    <View>
      <Text onPress={onAdd}>
        {num} : {sampleText}
      </Text>
    </View>
  );
}

export default Props;