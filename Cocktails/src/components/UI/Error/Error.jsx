import {Card,Text} from "react-native-paper";

export default function error(){
    return(
        <Card style={{minHeight:200,justifyContent:'center', padding:10}}>
            <Text style={{textAlign:"center"}} variant="headlineMedium">Something went wrong</Text>
        </Card>
    )
}