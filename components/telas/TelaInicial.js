import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


const jokenpo = require('../imgs/jokenpo.jpg')

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
                    <TouchableHighlight style={styles.btn}
                        title='Ir tela Resultado' onPress={() => Actions.telaJogo()}>
                        <View>
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
    btn: {
        marginTop: 10,
        borderWidth: 2,
        backgroundColor: 'black',
        borderRadius: 50,
        padding: 12,
    },
    txt: {
        color: '#fff',
        fontSize: 20,
        textAlign: "center"
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
    }
});


