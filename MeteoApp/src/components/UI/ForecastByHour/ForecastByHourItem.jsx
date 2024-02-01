import {StyleSheet, View} from 'react-native';
import { Text, Avatar} from 'react-native-paper';
import {weatherRequestIcon} from "../../../request/weather";
import {kelvinToCelsius} from "../../../service/service";
import moment from "moment";

export default function ForecastByHourItem({dataByHour}){
    const {dt_txt, weather, main} = dataByHour
    const time = moment(dt_txt).format('HH')
    return(
        <View style={styles.itemByHour}>
            <Text variant="bodyLarge" style={styles.itemByHour.title}>{time}h</Text>
            <Avatar.Image size={55} style={styles.itemByHour.circle} source={{uri:weatherRequestIcon(weather[0].icon)}}/>
            <Text style={styles.itemByHour.title} variant="bodySmall">{kelvinToCelsius(main.temp)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    itemByHour:{
        flexDirection:'column',
        alignItems:"center",
        marginLeft:10,
        marginRight:10,
        title:{
            color:'#fff'
        },
        circle:{
            backgroundColor:'transparent'
        }
    },

});