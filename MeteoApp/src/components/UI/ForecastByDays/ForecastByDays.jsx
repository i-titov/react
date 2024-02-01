import {FlatList, StyleSheet, View} from 'react-native';
import { Text, Avatar} from 'react-native-paper';
import ForecastByDaysItem from "../ForecastByDays/ForecastByDaysItem";

export default function ForecastByDays({forecastByDays}){
    return(
        <View style={styles.forecastDays}>
            <View style={styles.forecastDays.forecastDaysTitle}>
                <Avatar.Icon size={30} color='#ABABABFF' style={styles.forecastDays.circle} icon='calendar'/>
                <Text variant="labelSmall" style={styles.forecastDays.forecastDaysTitle.title}>Forecast for days</Text>
            </View>
            <FlatList
                horizontal={false}
                data={forecastByDays}
                renderItem={({item}) =>
                    <ForecastByDaysItem  dataByDay={item}/>
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    forecastDays:{
        flex: 1,
        marginTop: 10,
        backgroundColor: 'rgba(234,229,229,0.76)',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:30,
        circle:{
            backgroundColor:'transparent',
            alignItems:'center'
        },
        forecastDaysTitle:{
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center',
            title:{
                color:'#ABABABFF',
            }
        },
        forecastDaysItems:{
            marginRight:'auto',
            marginLeft:'auto'
        }
    }

});