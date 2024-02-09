import {Text} from "react-native-paper";
import {StyleSheet,View,Image,Button} from 'react-native';


export default function cardInfo({infoCocktail,goBack}){
    return(
        <View style={styles.cocktailCard}>
            <View style={styles.cocktailInfo}>
                <Image style={styles.cocktailInfo.img} source={{uri: infoCocktail.strDrinkThumb}}/>
                <View style={styles.cocktailInfo.textBlock}>
                    <Text variant="displayMedium">{infoCocktail.strDrink}</Text>
                    <Text style={styles.cocktailInfo.textBlock.subtitle} variant="headlineSmall">{infoCocktail.strCategory}</Text>
                    <View style={styles.cocktailInfo.textBlock.divider}/>
                    <Text style={styles.cocktailInfo.textBlock.mainText} variant="bodyLarge">{infoCocktail.strInstructions}</Text>
                </View>
                <Button style={styles.cocktailInfo.btn} onPress={goBack}>Back</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cocktailCard:{
        padding:10,
        justifyContent:'center',
        flex:1,
    },
    cocktailInfo:{
        backgroundColor:'#fff',
        shadowColor:'rgba(0,0,0,0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        img:{
            minWidth:300,
            minHeight:300,
            marginBottom:50
        },
        textBlock:{
            marginBottom:30,
            padding: 15,
            subtitle:{
                color:'rgba(0,0,0,0.25)',
                marginBottom: 20
            },
            divider:{
                backgroundColor: 'rgba(0,0,0,0.25)',
                marginBottom:30,
                height: 2,
                justifyContent:'flex-start',
                width: '20%'
            },
            mainText:{
                color:'rgba(0,0,0,0.5)',
            }

        },
        btn:{
            backgroundColor:'#efebe6',
            height:50,
        }
    }
})