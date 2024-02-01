import {StyleSheet, View} from 'react-native';
import { Text, Avatar} from 'react-native-paper';
import {weatherRequestIcon} from "../../../request/weather";
import {kelvinToCelsius} from "../../../service/service";
import moment from "moment";

export default function forecastByDaysItem({dataByDay}){
    const {dt_txt, weather, main} = dataByDay
    const time = moment(dt_txt).format('ddd')
    return(
        <View style={styles.itemByDaysContainer}>
            <View style={styles.itemByDaysContainer.itemByDays}>
                <Text variant="bodyLarge" style={styles.itemByDaysContainer.itemByDays.title}>{time}</Text>
                <Avatar.Image style={styles.itemByDaysContainer.itemByDays.circle} size={40} source={{uri:weatherRequestIcon(weather[0].icon)}}/>
                <View style={styles.itemByDaysContainer.itemByDays.temps}>
                    <Text variant="bodyLarge"
                          style={[styles.itemByDaysContainer.itemByDays.temps.item,styles.itemByDaysContainer.itemByDays.title]}>
                        {kelvinToCelsius(main.temp_min)}
                    </Text>
                    <Text variant="bodyLarge"
                          style={[styles.itemByDaysContainer.itemByDays.temps.item,styles.itemByDaysContainer.itemByDays.title]}>
                        {kelvinToCelsius(main.temp_max)}
                    </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    itemByDaysContainer:{
        borderWidth: 0.25,
        borderColor:'#ABABABFF',
        borderEndWidth: 0,
        borderStartWidth: 0,
        itemByDays:{
            flexDirection:'row',
            alignItems:"center",
            justifyContent:'space-between',
            marginLeft:10,
            marginRight:10,
            title:{
                color:'#fff'
            },
            circle:{
                backgroundColor:'transparent'
            },
            temps:{
                flexDirection:'row',
                item:{
                    marginLeft:10,
                    marginRight:10,
                }
            }
        },
    }
});