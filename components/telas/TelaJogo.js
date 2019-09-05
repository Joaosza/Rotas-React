import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class TelaJogo extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                <Text style={{ textAlign: 'center', color: '#fff' }}>Tela Jogo</Text>
                <Button title='Ir tela Resultado' onPress={() => Actions.telaResultado()}/>
            </View>
        );
    }
}

