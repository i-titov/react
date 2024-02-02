import {Text, View,Button} from "react-native";


export default function SecondPage({ navigation }){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Second page</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />

        </View>
    );
}