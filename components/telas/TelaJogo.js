import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const papel = require('../imgs/papel.png')
const pedra = require('../imgs/pedra.png')
const tesoura = require('../imgs/tesoura.png')

export default class TelaJogo extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'white',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>

                <View style={{
                    flex: 1
                }}>

                    <Text style={styles.txt}>Escolha!</Text>
                </View>


                {/* Pedra */}
                <View style={{
                    flex: 1
                }}>
                    <TouchableHighlight style={styles.btn}
                        title='Ir tela Resultado'>
                        <View>
                            <Image style={[styles.bordas, styles.pedra]} source={pedra}></Image>
                        </View>
                    </TouchableHighlight>

                </View>

                {/* Papel */}
                <View style={{
                    flex: 1
                }}>
                    <Image style={[styles.bordas, styles.papel]} source={papel}></Image>
                </View>

                {/* Tesoura */}
                <View style={{
                    flex: 1
                }}>
                    <Image style={[styles.bordas, styles.tesoura]} source={tesoura}></Image>
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
        padding: 15,
        width: 200,
        height: 150,
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'flex-start'
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



