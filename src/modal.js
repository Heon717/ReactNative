import React, { useState } from "react";
import {View,Text,StyleSheet, Button, Modal} from 'react-native';

const ModalComponent = () => {
    const [modal,setModal] = useState(false);
    const handleModal = () => {
        modal ? setModal(false) : setModal(true);
    }

    return (
        <View style={{width:'100%'}}>
            <Button
                title="모달창 열기"
                onPress={handleModal}
            />
            <Modal
                visible={modal}
                animationType={'slide'} // slide fade none
                // onShow={()=>{alert('!!')}}
            >
                <View style={{
                    marginTop: 60,
                    backgroundColor:'orange'}}
                >
                    <Text>
                        This is modal content
                    </Text>
                </View>
                    <Button
                        title="Close"
                        onPress={handleModal}
                    />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ModalComponent;