import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const papel = require('../imgs/papel.png')
const pedra = require('../imgs/pedra.png')
const tesoura = require('../imgs/tesoura.png')

export default class TelaJogo extends Component {

    state = {
        usuario: '',
        computador: '',
        resultado: '',
    }

    async escolhaUsuario() {
        switch (this.props.opcaoJogador) {
            case 'pedra':
                await this.setState({ imgJogador: pedra });
                if (this.state.escolhaPc == 'pedra') {
                    await this.setState({
                        imgApp: pedra,
                        resultado: 'empate'
                    });
                } else if (this.setState.escolhaPc == 'papel') {
                    await this.setState({
                        imgApp: papel,
                        resultado: 'perdeu'
                    });
                } else (this.setState.escolhaPc == 'tesoura'){
                    await this.setState({
                        imgApp: tesoura,
                        resultado: 'ganhou'
                    });
                }
        }
    }
    escolhaPc() {
        let numeroAleatorio = Math.floor(Math.random() * 3);
        switch (numeroAleatorio) {
            case 0: computador = 'pedra'; break
            case 1: computador = 'papel'; break
            case 2: computador = 'tesoura'; break
            default: computador = '';
        }
    }

    async componentWillMount() {
        await this.setState.SetJogador();
        await this.setState.SetPc();
        await this.setState.SetResultado();
    }

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
                            styles.img
                        ]}>
                            <Image style={[styles.pedra, styles.img]} source={pedra}></Image>
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
                            styles.img
                        ]}>
                            <Image style={[styles.papel, styles.img]} source={papel}></Image>
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
                        <View>
                            <Image style={[styles.tesoura, styles.img]} source={tesoura} />
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
    img: {
        width: 200,
        height: 120,
    },
    pedra: {
        borderWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: '#808080',
        padding: 50,
    },
    tesoura: {
        borderWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: '#eecbad',
        padding: 50,
    },
    papel: {
        borderWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: '#000',
        padding: 50,

    },

})



