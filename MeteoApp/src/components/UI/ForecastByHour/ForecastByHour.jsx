import {FlatList, StyleSheet, View} from 'react-native';
import { Text,Avatar } from 'react-native-paper';
import ForecastByHourItem from "./ForecastByHourItem";

export default function forecastByHour({forecastByHour}){
    return(
        <View style={styles.forecastByHourContainer}>
            <View style={styles.forecastHour}>
                <View style={styles.forecastHourTitle}>
                    <Avatar.Icon size={30} color='#ABABABFF' style={styles.forecastHour.circle} icon='clock'/>
                    <Text variant="labelSmall" style={styles.forecastHourTitle.title}>Forecast for hour</Text>
                </View>
                <FlatList
                    horizontal={true}
                    data={forecastByHour}
                    style={styles.forecastHourItems}
                    renderItem={({item}) =>
                        <ForecastByHourItem  dataByHour={item}/>
                    }
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    forecastByHourContainer:{
        flex: 1
    },
    forecastHour: {
        flex: 0.8,
        backgroundColor: 'rgba(234,229,229,0.76)',
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:30,
        circle:{
            backgroundColor:'transparent',
            alignItems:'center'
        }
    },
    forecastHourTitle:{
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        title:{
            color:'#ABABABFF',
        }
    },
    forecastHourItems:{
        marginRight:'auto',
        marginLeft:'auto'
    }
});