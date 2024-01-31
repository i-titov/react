import * as React from 'react';
import { Avatar, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function error(){
    return(
        <Card mode='elevated' style={style.container}>
            <Card.Title title='Something went wrong' right={()=><Avatar.Icon icon='connection' size={50}/>}/>
        </Card>
    )
}
const style= StyleSheet.create({
    container:{
        width:'90%',
        marginRight:"auto",
        marginLeft:"auto",
        padding:10
    }
})