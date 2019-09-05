import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TelaInicio from './telas/TelaInicial';
import TelaJogo from './telas/TelaJogo';
import TelaResultado from './telas/TelaResultado';


const Routes = () =>{
    return(
        <Router>
            <Scene>
                <Scene key='telaInicio' Component={TelaInicio} initial/>
                <Scene key='telaJogo' Component={TelaJogo}/>
                <Scene key='telaJogo' Component={TelaResultado}/>
            </Scene>
        </Router>
    );
}


export default Routes;