import {View} from "react-native";
import Spinner from "../components/UI/Spinner/Spinner";
import axios from "axios";
import {urlApiById} from "../service/urls/urls_api";
import {useState,useEffect} from "react";
import CocktailInfo from '../components/UI/Card/CocktailInfo'
import Error from '../components/UI/Error/Error'


export default function Details({ route, navigation }){
    const [cocktail, setCocktail] = useState(null)
    const [error, setError] = useState(false)
    let id  = route.params.id;
    const goBack = ()=>{
        id = null
        navigation.goBack()
    }
    async function fetchInfoData() {
        await axios.get(urlApiById(id))
            .then((responses) => {
                setCocktail(responses.data.drinks[0])
            })
            .catch((error) => {
                setError(true)
            })
    }
    useEffect(()=>{
        fetchInfoData()
    },[id])
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {error ? <Error/> :
                <>
                    {cocktail ?
                        <CocktailInfo infoCocktail={cocktail} goBack={goBack}/>
                        : <Spinner/>}
                </>}
        </View>
    );
}