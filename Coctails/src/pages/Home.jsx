import {Button, Text, View} from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Second"
                onPress={() => navigation.navigate('Second')}
            />
        </View>
    );
}