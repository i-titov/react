import { StyleSheet,View } from 'react-native';
import { Text } from 'react-native-paper';
import { Avatar, } from 'react-native-paper';
import {kelvinToCelsius} from "../../service/service";


export default function meteoCard({meteoData}){
    const weather = meteoData.meteoData
    return(
        <View style={styles.meteoCard}>
            <Text variant="headlineSmall" style={styles.meteoCard.title}>{meteoData.meteoData.name}</Text>
            <View style={styles.meteoCard.meteo}>
                <Text variant="displayMedium" style={styles.meteoCard.textTitle}>{kelvinToCelsius(weather.main.temp)}</Text>
                <Text variant="titleLarge" style={styles.meteoCard.textTitle}>{weather.weather[0].main}</Text>
                <View style={styles.meteoCard.temps}>
                    <Avatar.Icon size={25} icon='arrow-up' style={styles.meteoCard.circle}/>
                    <Text variant="titleMedium" style={styles.meteoCard.textTitle}>{kelvinToCelsius(weather.main.temp_max)}</Text>
                    <Avatar.Icon size={25} icon='arrow-down' style={styles.meteoCard.circle}/>
                    <Text variant="titleMedium" style={styles.meteoCard.textTitle}>{kelvinToCelsius(weather.main.temp_min)}</Text>
                </View>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    meteoCard:{
        padding:20,
        width: '100%',
        marginBottom:30,
        circle:{
            backgroundColor:'transparent',
        },
        title:{
            marginRight:'auto',
            marginLeft:'auto',
            color:'#fff'
        },
        meteo:{
            marginTop:10,
            alignItems:'center',
        },
        textTitle:{
            color:'#fff'
        },
        temps:{
            marginTop:5,
            flexDirection:'row',
            marginRight:'auto',
            marginLeft:'auto'
        }
    }
})