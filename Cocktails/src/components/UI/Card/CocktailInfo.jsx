import {Text} from "react-native-paper";
import {StyleSheet,View,Image,Pressable,FlatList,ScrollView,SafeAreaView} from 'react-native';

export default function cocktailInfo({infoCocktail,goBack}){
    const newRecipe = [];
    const newMeasure = [];
    Object.entries(infoCocktail).forEach(
        ([key, value]) => {
            let strIngredient = /strIngredient/
            let strMeasure = /strMeasure/
            if(key.match(strIngredient) && value){
                newRecipe.push(value);
            }
            if(key.match(strMeasure) && value){
                newMeasure.push(value);
            }
        }
    );
    return(
        <View style={styles.cocktailCard} accessibilityElementsHidden='true'>
            <ScrollView>
                <View style={styles.cocktailInfo}>
                    <Image style={styles.cocktailInfo.img} source={{uri: infoCocktail.strDrinkThumb}}/>
                    <View style={styles.cocktailInfo.textBlock}>
                        <Text variant="displayMedium">{infoCocktail.strDrink}</Text>
                        <Text style={styles.cocktailInfo.textBlock.subtitle} variant="headlineSmall">{infoCocktail.strCategory}</Text>
                        <View style={styles.cocktailInfo.textBlock.divider}/>
                        <Text style={styles.cocktailInfo.textBlock.mainText} variant="bodyLarge">{infoCocktail.strInstructions}</Text>
                        <View style={styles.cocktailInfo.textBlock.list}>
                            <FlatList
                                data={newRecipe}
                                scrollEnabled={false}
                                renderItem={({item})=>
                                    <Text style={styles.cocktailInfo.textBlock.mainText} variant="bodyMedium">{item}</Text>
                                }
                            />
                            <FlatList
                                data={newMeasure}
                                scrollEnabled={false}
                                renderItem={({item})=>
                                    <Text style={styles.cocktailInfo.textBlock.mainText} variant="bodyMedium">{item}</Text>
                                }
                            />
                        </View>
                    </View>
                    <Pressable style={styles.btn} onPress={goBack}>
                        <Text variant="titleMedium" style={styles.btn.text}>Back</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
)
}
const styles = StyleSheet.create({
    cocktailCard:{
        padding:10,
        justifyContent:'center',
        flex:1
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
            marginBottom:5,
            padding: 20,
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
            },
            list:{
                marginTop:10,
                justifyContent:'flex-start',
                flexDirection:'row',
                color:'rgba(0,0,0,0.5)',
            }
        }
    },
    btn:{
        backgroundColor:'#efebe6',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        text:{
            color:'#fff',
        }
    }
})