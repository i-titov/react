import {View, StyleSheet,FlatList} from "react-native";
import {useState, useEffect} from "react";
import {alphabet} from "../service/tools/tools"
import Spinner from "../components/UI/Spinner/Spinner";
import CardComponent from "../components/UI/Card/Card";
import {urlApiByLetter} from "../service/API/requestAPI";
import Error from '../components/UI/Error/Error';
import axios from "axios";


export default function Home({ navigation }) {
    const [cocktails, setCocktails] = useState([])
    const [alphabetArr, setAlphabet] = useState(alphabet())
    const [currentLetter, setCurrentLetter] = useState(alphabetArr[0])
    const [error, setError] = useState(false)
    const nextLetter = ()=>{
        if(currentLetter === alphabetArr[alphabetArr.length -1]){return}
        let letter = alphabetArr.find((item,index)=> index === alphabetArr.indexOf(currentLetter)+1)
        setCurrentLetter(letter)
    }
    async function fetchMoreData(letter) {
        await axios.get(urlApiByLetter(letter))
            .then((responses) => {
                responses.data.drinks.forEach((item)=>{
                    if(item === 'undefined'){return}
                    setCocktails(cocktails=>[...cocktails,item])
                })
            })
            .catch((error) => {
                setError(error)
            })
    }
    const linkToDetails = function (id){
        navigation.navigate('Details', {id})
    }
    useEffect(()=>{
        fetchMoreData(currentLetter)
    },[currentLetter])
    return (
        <View style={styles.home}>
            { error ? <Error/> :
                <FlatList
                data={cocktails}
                renderItem={(item)=><CardComponent navigate={linkToDetails} dataCard={item}/>}
                onEndReached={nextLetter}
                ListFooterComponent={()=><Spinner/>}
            />}
        </View>
    );
}
const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent:'center',
        padding:5
    }
})