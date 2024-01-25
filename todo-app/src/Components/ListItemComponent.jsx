import {StyleSheet} from 'react-native';
import {Card,Button} from 'react-native-paper';
import React from 'react';

export default function ListItemComponent({title, index, idHandler}){
    return(
        <Card
            mode={'elevated'}
            style={styles.list}
            onPress={()=>
            idHandler(index)
        }>
            <Card.Title
              style={styles.title}
              title={title}
              right={()=><Button icon="file-edit"/>}/>
        </Card>
    )
}
const styles = StyleSheet.create({
    list: {
        marginTop: 10,
        marginBottom: 10,
        width: "90%",
        marginRight: 'auto',
        marginLeft: 'auto',
    }
});