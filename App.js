import React, {Component,useState} from "react";
import {View,Text,StyleSheet,ScrollView,Button,TextInput,Image} from 'react-native';
import Header from './src/header.js';
import Generator from './src/generator.js';
import Numlist from './src/numlist.js';
import Input from './src/input.js';
import Textlist from "./src/textlist.js";
import PickerComponent from "./src/picker.js";
import ModalComponent from "./src/modal.js";
import Dog from './assets/images/dog.jpg';

const App = () => {
  const [num,setNum] = useState([5,7,777]);
  const [text,setText] = useState('');
  const [alpahbet,setAlpahbet] = useState(['a','b','c','d']);
  
  let state = {
    appName : 'My First App',
  }
  
  const randomNum = () => {
    const ranNumber = Math.floor(Math.random()*100)+1;
    let numCopy = [...num,ranNumber];
    setNum(numCopy);
  }

  const removeNum = (i) => {
    let newArr = num.filter((n,index) => {
      return i != index;
    });
    setNum(newArr);
  }

  const addTextInput = () => {
    setText('');
    let alpahCopy = [...alpahbet,text];
    text == "" ? false : setAlpahbet(alpahCopy);
  }


  const onChangeInput = (e) => {
      setText(e);
  }

  return(
    <View style={styles.mainView}>
      <ScrollView style={{width: '100%'}}>
      <Image
        style={styles.image}
        source={{uri: 'https://picsum.photos/id/237/400/300'}}
        resizeMode='contain'
        // onLoadEnd={()=>{alert('이미지 로딩완료!')}}
      />
      <ModalComponent/>
      <PickerComponent></PickerComponent>
      {/* <Header name={state.appName}/>
      <View>
        <Text style={styles.mainText} onPress={()=>alert('text event')}>Hello World</Text>
      </View>
      <Generator randomNum={randomNum}/>
      <ScrollView 
        style={{width: "100%"}}
        // onMomentumScrollBegin={()=>{alert('begin');}}
        // onMomentumScrollEnd={()=>{alert('end');}}
        // onScroll={()=>{alert('scroll');}}
        // onContentSizeChange={(width,height)=>{alert(height)}}
        bounces={true}
        >
        <Numlist list={num} removeNum={removeNum}/>
      </ScrollView> */}
        <TextInput 
            value={text}
            style={styles.input} 
            onChangeText={onChangeInput}
            multiline={true}
            maxLength={50}
            autoCapitalize={'none'}
            editable={true}
        />
      <Button
        title="입력완료"
        onPress={addTextInput}/>
        <Textlist alpahbet={alpahbet}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    padding: 20
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  },
  image: {
    width: '100%',
    height: 300
  }
})

export default App;