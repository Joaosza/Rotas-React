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

            }}>

                <View style={{
                    flex: 1
                }}>

                    <Text style={styles.txt}>Escolha!</Text>
                </View>


                {/* Pedra */}
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableHighlight style={styles.btn}
                        title='Ir tela Resultado'>
                        <View style={[
                            styles.bordas
                        ]}>
                            <Image style={[styles.pedra]} source={pedra}></Image>
                        </View>
                    </TouchableHighlight>

                </View>

                {/* Papel */}
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableHighlight style={styles.btn}
                        title='Ir tela Resultado'>
                        <View style={[
                            styles.bordas
                        ]}>
                            <Image style={[styles.papel]} source={papel}></Image>
                        </View>
                    </TouchableHighlight>

                </View>

                {/* Tesoura */}
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableHighlight style={styles.btn}
                        title='Ir tela Resultado'>
                        <View style={[
                            styles.bordas
                        ]}>
                            <Image style={[styles.tesoura]} source={tesoura} />
                        </View>
                    </TouchableHighlight>


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
    texto: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {

    },
    pedra: {
        borderWidth: 1,
        padding: 15,
        width: 150,
        height: 100,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -50,
        marginLeft: -50,
        borderColor: '#808080',
    },
    tesoura: {
        borderWidth: 1,
        padding: 15,
        width: 150,
        height: 100,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -50,
        marginLeft: -50,
        borderColor: '#eecbad',
    },
    papel: {
        borderWidth: 1,
        padding: 15,
        width: 150,
        height: 100,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -50,
        marginLeft: -50,
        borderColor: '#000',
    },

})



