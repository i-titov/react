import {View, StyleSheet,FlatList} from "react-native";
import {useState, useEffect} from "react";
import axios from "axios";
import {alphabet} from "../service/tools/tools"
import Spinner from "../components/UI/Spinner";
import CardComponent from "../components/UI/Card/Card";

export default function Home({ navigation }) {
    const [cocktails, setCocktails] = useState([])
    const [alphabetArr, setAlphabet] = useState([])
    const [currentLetter, setCurrentLetter] = useState()
    const [error, setError] = useState(false)
    const [spinner, setSpinner] = useState(true)
    useEffect(()=>{
        setAlphabet(alphabet())
        (async () => {
            await axios

                axios.all(requests)
                .then(axios.spread((...responses) => {
                    responses.forEach((res) =>{

                        console.log(res.data.drinks)
                    })
                }))
                .catch((error) => {
                    setError(error)
                })
                .finally(()=>{
                    setSpinner(false)
                })
        })();
    },[])
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