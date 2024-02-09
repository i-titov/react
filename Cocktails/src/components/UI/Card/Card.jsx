import * as React from 'react';
import { Button, Card } from 'react-native-paper';

export default function CardComponent({dataCard, navigate}){
    return(
    <Card style={{marginTop:20,marginBottom:20}} mode="elevated">
            <Card.Title title={dataCard.item.strDrink} subtitle={dataCard.item.strCategory} />
            <Card.Cover source={{ uri: dataCard.item.strDrinkThumb }} />
            <Card.Actions>
                <Button onPress={() => navigate(dataCard.item.idDrink )}>More</Button>
            </Card.Actions>
    </Card>)
}