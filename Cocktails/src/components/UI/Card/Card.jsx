import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function CardComponent({dataCard}){

    return(
    <Card style={{marginTop:20,marginBottom:20,padding:10}} mode="elevated">
            <Card.Title title={dataCard.item.strDrink} subtitle={dataCard.item.strCategory} />
            <Card.Cover source={{ uri: dataCard.item.strDrinkThumb }} />
            <Card.Actions>
                <Button>More</Button>
            </Card.Actions>
    </Card>)
}