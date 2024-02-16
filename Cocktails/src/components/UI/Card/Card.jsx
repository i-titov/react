import * as React from 'react';
import {Button, Card} from 'react-native-paper';
import {Pressable} from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import {addFavoriteAction} from '../../../store/Favorite/FavoriteSlice'



export default function CardComponent({dataCard, navigate}) {
    return (
        <Pressable onPress={() => navigate(dataCard.item.idDrink)}>
            <Card style={{marginTop: 20, marginBottom: 20}} mode="elevated">
                <Card.Title title={dataCard.item.strDrink} subtitle={dataCard.item.strCategory}/>
                <Card.Cover style={{borderRadius: 0}} source={{uri: dataCard.item.strDrinkThumb}}/>
                <Card className="Action">
                    <Button onPress={(state)=>dispatch(addFavoriteAction.addFavorite(dataCard.item.idDrink))}>Test</Button>
                </Card>
            </Card>
        </Pressable>
    )
}