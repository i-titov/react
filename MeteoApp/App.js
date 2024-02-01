import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import {forecastRequest, weatherRequest} from "./src/request/weather";
import axios from "axios";
import { ActivityIndicator } from 'react-native-paper';
import Main from './src/components/Main'
import Error from './src/components/UI/Error'


export default function App() {
  const [meteo, setMeteo] = useState({});
  const [forecast, setForecast] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let request = await Location.getCurrentPositionAsync({});
      axios.all([
        axios.get(weatherRequest(request.coords.latitude,request.coords.longitude)),
        axios.get(forecastRequest(request.coords.latitude,request.coords.longitude))
      ])
        .then(axios.spread((meteoResponse, forecastResponse) => {
          setMeteo(meteoResponse.data)
          setForecast(forecastResponse.data.list)
        })).catch(function (error) {
        // handle error
        setErrorMsg(error.message);
      }).finally(()=>setSpinner(false));
    })();
  }, []);

  return (
    <View style={styles.container}>
        {spinner ? <ActivityIndicator/> : (errorMsg ? <Error/> : <Main meteoData={meteo} forecastData={forecast}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(79,158,238,0.68)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
