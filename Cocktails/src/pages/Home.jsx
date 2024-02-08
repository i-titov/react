import {View, StyleSheet,FlatList} from "react-native";
import {useState, useEffect} from "react";
import axios from "axios";
import {alphabet} from "../service/tools/tools"
import Spinner from "../components/UI/Spinner";
import CardComponent from "../components/UI/Card/Card";
import {urlApiByLetter} from "../service/API/requestAPI";
import {Button} from "react-native-paper";

export default function Home({ navigation }) {
    const [cocktails, setCocktails] = useState([])
    const [alphabetArr, setAlphabet] = useState([])
    const [currentLetter, setCurrentLetter] = useState(null)
    const [error, setError] = useState(false)
    const [spinner, setSpinner] = useState(true)
    const nextRequest = ()=>{
        if(currentLetter === alphabetArr[alphabetArr.length -1]){return}
        let nextLetter = alphabetArr.find((item,index)=> index === alphabetArr.indexOf(currentLetter)+1)
        setCurrentLetter(nextLetter)
    }
    async function request(letter) {
        setSpinner(true)
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
            .finally(()=>{
                setSpinner(false)
            })
    }
    useEffect(()=>{
        setAlphabet(alphabet())
        setCurrentLetter(alphabetArr[0])
        request(currentLetter)
    },[currentLetter])
    console.log(currentLetter)
    return (
        <View style={styles.home}>
            {spinner ? <Spinner/> :
                <FlatList
                data={cocktails}
                renderItem={(item)=><CardComponent dataCard={item}/>}
                />
            }
            <Button onPress={()=>{nextRequest()}}>test</Button>
        </View>
    );
}
const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent:'center',
    }
})