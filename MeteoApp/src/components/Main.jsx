import { StyleSheet, Text, View } from 'react-native';
import MeteoCard from './UI/MeteoCard'
import moment from "moment";
import React, { useState,useEffect } from 'react';
import ForecastByHour from './UI/ForecastByHour/ForecastByHour'
import ForecastByDays from "./UI/ForecastByDays/ForecastByDays";


export default function main({meteoData,forecastData}){
    const [forecastByHour,setForecastByHour] = useState([])
    const [forecastByDay,setForecastByDay] = useState([])
    const today = moment().format('YYYY-MM-DD')
    let day = moment().format('YYYY-MM-DD')
    useEffect(() => {
        const byHour = forecastData.filter(item=>{
            return moment(item.dt_txt).format('YYYY-MM-DD') === today
        })
        setForecastByHour(byHour)
    }, []);

    return(
        <View style={styles.container}>
            <MeteoCard meteoData={{meteoData}}/>
            <ForecastByHour forecastByHour={forecastByHour}/>
            <ForecastByDays forecastByDays={forecastData}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(141,141,141,0.76)',
        width:'100%',
        padding:30,
    },
    circle:{
        backgroundColor:'transparent'
    }
});