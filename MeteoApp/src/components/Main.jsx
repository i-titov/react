import { StyleSheet, Text, View } from 'react-native';
import MeteoCard from './UI/MeteoCard'
import moment from "moment";
import React, { useState,useEffect } from 'react';


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
        const arrByDay= []
        const byDay = forecastData.map(item=>{
            if (day === moment(item.dt_txt).format('YYYY-MM-DD')){
                arrByDay.push({[day]: item})
            }
        })
        console.log(arrByDay)
    }, []);

    return(
        <View style={styles.container}>
            <MeteoCard meteoData={{meteoData}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.76)',
        width:'100%',
        padding:50,
    },
});