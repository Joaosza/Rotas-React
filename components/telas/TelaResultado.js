import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class TelaResultado extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'gray', flex: 1 }}>
                <Text style={{ textAlign: 'center', color: '#fff' }}>Tela Resultado</Text>
                <Button title='Ir tela Inicial' onPress={() => Actions.telaInicio()}/>
            </View>
        );
    }
}



