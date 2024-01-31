import { StyleSheet,View } from 'react-native';
import { Text } from 'react-native-paper';
import { Avatar, } from 'react-native-paper';
import {kelvinToCelsius} from "../../service/service";


export default function meteoCard({meteoData}){
    const weather = meteoData.meteoData
    return(
        <View style={styles.meteoCard}>
            <Text variant="headlineMedium">{meteoData.meteoData.name}</Text>
            <View style={styles.meteo}>
                <Text variant="headlineMedium">{kelvinToCelsius(weather.main.temp)}</Text>
                <Text variant="titleLarge">{weather.weather[0].main}</Text>
                <View>
                <Text variant="titleMedium">{kelvinToCelsius(weather.main.temp_max)} <Avatar.Icon icon='arrow-up'/></Text>
                <Text variant="titleMedium">{kelvinToCelsius(weather.main.temp_min)} <Avatar.Icon icon='arrow-down'/></Text>
                </View>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    meteoCard:{
        padding:10,
        width: '100%',
        backgroundColor: '#b393ee'
    },
    img:{
        backgroundColor:'transparent',
        marginRight:'auto',
        marginLeft:'auto',
    },
    meteo:{
        marginTop:30,
        marginRight:'auto',
        marginLeft:'auto',
        backgroundColor:'#818080'

    }
})