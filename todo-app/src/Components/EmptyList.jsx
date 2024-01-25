import { StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function EmptyList(){
    return(
        <View style={styles.container}>
            <Text>
                The list is empty, you have to add something
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:
        {
            flex: 1,
            backgroundColor:'#f39292',
            color:'#fff',
            borderRadius:10,
            borderWidth:1,
            justifyContent:'center',
            alignItems:'center',
            padding:20
        }
})