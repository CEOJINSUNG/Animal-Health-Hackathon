import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Registration} from 'pages';

const screenStyle = {
    textAlign: 'center',
    backgroundColor: 'rgb(228,228,228)',
}

const App = () => {
    return (
        <div style={screenStyle}>
            <Route exact path="/" component={Home} />
            <Route path="/Registration" component={Registration} />
        </div>
    );
};

export default App;