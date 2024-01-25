import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ListItemComponent from "./ListItemComponent";
import EmptyList from "./EmptyList";


export default function List ({list,idHandler}){
    if(list.length != 0){
        return(
            <View style={styles.listContainer}>
                <FlatList
                    data={list}
                    renderItem={({item})=><ListItemComponent title={item.action} index={item.id}  idHandler={idHandler}/>}
                    keyExtractor={item => item.id}/>
            </View>)
    }
    return (<EmptyList/>)
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 3,
        justifyContent: 'center',
        paddingTop:20,
        paddingRight:10,
        paddingLeft:10,
    },
    formContainer:{
        flex: 3,
        paddingTop:40,
        paddingBottom:10,
        alignItems:'center'
    },
});