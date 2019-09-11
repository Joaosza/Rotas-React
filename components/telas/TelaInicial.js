import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


const jokenpo = require('../imgs/jokenpo.jpg')
const play = require('../imgs/botao.png')

export default class TelaInicio extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'white',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>

                <View style={{
                    flex: 1,
                }}>
                    <Image source={jokenpo} style={{ height: 200, width: 450 }} />
                </View>


                <View style={{
                    flex: 1
                }}>
                    <TouchableHighlight 
                        title='Ir tela Resultado' onPress={() => Actions.telaJogo()}>
                        <View>
                            <Image source={play} style={[styles.img]} />
                            <Text style={styles.txt}>Jogar!</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={{
                    flex:1,
                }}>
                    <Text style={styles.footer}>Copyright©‎Vash</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    txt: {
        color: '#fff',
        fontSize: 20,
        textAlign: "center"
    },
    txt:{
        textAlign: 'center'
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'gray',
        color: 'white',
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    img: {
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 100,
        height: 100,
    }
});


