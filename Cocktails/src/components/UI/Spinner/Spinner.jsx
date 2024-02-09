import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const MyComponent = () => (
    <ActivityIndicator size='large' animating={true} color={MD2Colors.red800} style={{marginTop:10,marginBottom:10}}/>
);

export default MyComponent;