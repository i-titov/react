import {Text, View, StyleSheet,FlatList} from "react-native";
import {useState, useEffect} from "react";
import axios from "axios";
import {requestAPIByLetter} from "../service/API/requestAPI";
import {alphabet} from "../service/tools/tools"
import Spinner from "../components/UI/Spinner";
import CardComponent from "../components/UI/Card/Card";
import {log} from "expo/build/devtools/logger";

export default function Home({ navigation }) {
    const [cocktails, setCocktails] = useState([])
    const [error, setError] = useState(false)
    const [spinner, setSpinner] = useState(true)
    useEffect(()=>{
        (async () => {
            const alphabetArr = alphabet()
            const requests = alphabetArr.map((letter)=>{
                return axios.get(requestAPIByLetter(letter))
            })
            const arr = []
            await axios.all(requests)
                .then(axios.spread((...responses) => {
                    responses.forEach((res) =>{
                      if(!res.data.drinks){return}
                      arr.push(res.data.drinks)
                    })
                }))
                .catch((error) => {
                    setError(error)
                })
                .finally(()=>{
                    setSpinner(false)
                })
            arr.forEach((item)=> {
                item.forEach((el)=>{
                    console.log(el)
                   setCocktails([...cocktails, el])
                })
            })
        })();
    },[])
    useEffect(()=>{
        console.log(cocktails,'test')
    },[cocktails])
    return (
        <View style={styles.home}>
            {spinner ? <Spinner/> :
                <FlatList
                data={cocktails}
                renderItem={(item)=><CardComponent dataCard={item}/>}
                />
            }
        </View>
    );
}
const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent:'center',
    }
})