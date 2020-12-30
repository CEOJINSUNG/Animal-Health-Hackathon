import React from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import { FirestoreProvider } from "@react-firebase/firestore";
import { Home, Registration, Splash, MedicalBoard, ReservationCard, ChooseDoctor, ChooseHospital, MakeReservation, AIDiagnosis } from 'pages';
import { firebaseConfig } from "../firebase"

const screenStyle = {
    textAlign: 'center',
    backgroundColor: 'rgb(228,228,228)',
}

const App = () => {
    return (
        <FirestoreProvider {...firebaseConfig} firebase={firebase}>
            <div style={screenStyle}>
                <Switch>
                    <Route exact path="/" component={Splash} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Registration" component={Registration} />
                    <Route exact path="/MedicalBoard" component={MedicalBoard} />
                    <Route exact path="/ReservationCard" component={ReservationCard} />
                    <Route exact path="/ChooseDoctor" component={ChooseDoctor} />
                    <Route exact path="/ChooseHospital" component={ChooseHospital} />
                    <Route exact path="/MakeReservation" component={MakeReservation} />
                    <Route exact path="/AI_Diagnosis" component={AIDiagnosis} />
                </Switch>
            </div>
        </FirestoreProvider>
    );
};

export default App;