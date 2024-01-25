import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import { Button,TextInput } from 'react-native-paper';


export default function FormComponent({addItem,modificationFn}){
    const [activity, setActivity] = useState('');
    const activityHandler = function (event){
        setActivity(event)
    }
    function submitAction(){
        if(activity == ''){return}
        addItem(activity)
        setActivity('')
    }
    return(
        <View>
            <View style={styles.form}>
                <View style={styles.formControlInput}>
                    <TextInput
                        label={'Add your activites'}
                        style={styles.input}
                        inputMode="text"
                        value={activity}
                        onChangeText={activityHandler}
                        mode='outlined'
                    />
                </View>
                <View style={styles.formControlBtn}>
                    <Button
                        style={styles.btn}
                        onPress={submitAction}
                        mode="contained"
                    >
                        Add
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        flexDirection: 'row',
        justifyContent:'center'
    },
    input:{
        marginRight: 5,
    },
    formControlInput:{
        width:'70%'
    },
    formControlBtn:{
        marginTop:10,
        height:'100%'
    },
    btn:{
        color:"#b589f5",
        borderColor:'#bebebe',
    },
})