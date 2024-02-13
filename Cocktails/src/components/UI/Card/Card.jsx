import * as React from 'react';
import {Button, Card} from 'react-native-paper';
import {Pressable} from "react-native";

export default function CardComponent({dataCard, navigate}) {
    return (
        <Pressable onPress={() => navigate(dataCard.item.idDrink)}>
            <Card style={{marginTop: 20, marginBottom: 20}} mode="elevated">
                <Card.Title title={dataCard.item.strDrink} subtitle={dataCard.item.strCategory}/>
                <Card.Cover source={{uri: dataCard.item.strDrinkThumb}}/>
            </Card>
        </Pressable>
    )
}