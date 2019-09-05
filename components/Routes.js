import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TelaInicio from './telas/TelaInicial';
import TelaJogo from './telas/TelaJogo';
import TelaResultado from './telas/TelaResultado';


const Routes = () =>{
    return(
        <Router>
            <Scene>
                <Scene key='telaInicio' component={TelaInicio} initial hideNavBar/>
                <Scene key='telaJogo' component={TelaJogo} hideNavBar/>
                <Scene key='telaResultado' component={TelaResultado} hideNavBar/>
            </Scene>
        </Router>
    );
}


export default Routes;