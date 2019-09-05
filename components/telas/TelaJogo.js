import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class TelaJogo extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>

                <View style={{
                    flex: 1
                }}>

                    <Text style={styles.txt}>Escolha!</Text>
                </View>


                {/* Pedra */}
                <View style={{
                    flex: 1
                }}>
                    <Text style={[styles.bordas, styles.pedra]}>Pedra!</Text>
                </View>


                {/* Papel */}
                <View style={{
                    flex: 1
                }}>

                    <Text style={[styles.bordas, styles.papel]}>Papel!</Text>
                </View>


                {/* Tesoura */}
                <View style={{
                    flex: 1
                }}>
                    <Text style={[styles.bordas, styles.tesoura]}>Tesoura!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        textAlign: "center",
        fontSize: 20
    },
    bordas: {
        borderWidth: 1,
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        padding: 15,
    },
    pedra: {
        borderColor: '#eecbad',
    },
    tesoura: {
        borderColor: '#87ceff',
    },
    papel: {
        borderColor: '#848484',
    },

})



