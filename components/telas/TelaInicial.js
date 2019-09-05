import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class TelaInicio extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'blue', flex: 1 }}>
            <Text style={{ textAlign: 'center', color: '#fff' }}> tela Inicio</Text>
            <Button title='Ir para Tela Jogo' onPress={() => Actions.telaJogo()} />
            </View>
        );
    }
}

