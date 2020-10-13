import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { Home, Registration, Splash,MedicalBoard,ReservationCard, ChooseDoctor} from 'pages';

const screenStyle = {
    textAlign: 'center',
    backgroundColor: 'rgb(228,228,228)',
}

const App = () => {
    return (
        <div style={screenStyle}>
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Registration" component={Registration} />
                <Route exact path="/MedicalBoard" component={MedicalBoard} />
                <Route exact path="/ReservationCard" component={ReservationCard} />
                <Route exact path="/ChooseDoctor" component={ChooseDoctor} />
            </Switch>
        </div>
    );
};

export default App;