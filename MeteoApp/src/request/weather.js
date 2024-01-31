const apiKey = '59477c8846061339316925c254e903e5'
export  function weatherRequest(lat,lon){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
}
export  function weatherRequestIcon(icon){
    return `https://openweathermap.org/img/wn/${icon}.png`
}
export function forecastRequest(lat,lon){
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
}
