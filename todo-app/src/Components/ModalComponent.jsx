import {StyleSheet, View} from 'react-native';
import { Modal, Portal, Button, Text } from 'react-native-paper';

import React from 'react';

export default function ModalComponent({isShowed, modalHandler, actionHandler}){

    return(
        <Portal>
            <Modal visible={isShowed} contentContainerStyle={styles.modal} onDismiss={modalHandler}>
                <View style={styles.textContainer}>
                    <Text variant="titleMedium" style={styles.textStyle}>Do you want really delete this action ?</Text>
                </View>
                <View style={styles.btnContainer}>
                    <Button
                        style={[styles.button, styles.buttonBlue]}
                        onPress={modalHandler}
                        mode="contained">
                        Non
                    </Button>
                    <Button
                        style={[styles.button, styles.buttonRed]}
                        onPress={actionHandler}
                        mode="contained">
                        Yes
                    </Button>
                </View>
            </Modal>
        </Portal>)
}
const styles = StyleSheet.create({
    modal:{
        padding: 10,
        backgroundColor: '#fff',
        minHeight:'60%',
        borderRadius:20,
        width:'90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        color:'#fff'
    },
    buttonBlue: {
        backgroundColor: '#2196F3',
        marginLeft: 10,
        marginRight: 10
    },
    buttonRed: {
        backgroundColor: '#e1436e',
        marginLeft: 10,
        marginRight: 10
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent:'center'
    },
    textContainer:{
        marginTop:30,
        marginBottom:30,
    }
});