import {Card,Text,Button,Avatar} from "react-native-paper";
import {log} from "expo/build/devtools/logger";

export default function cardInfo({infoCocktail,goBack}){
    return(
        <Card>
            <Card.Cover source={{ uri: infoCocktail.strDrinkThumb }} />
            <Card.Title title={infoCocktail.strDrink} subtitle={infoCocktail.strCategory} />
            <Card.Content>
                <Text variant="bodyMedium">{infoCocktail.strInstructions}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={goBack}>Back</Button>
            </Card.Actions>
        </Card>
    )
}