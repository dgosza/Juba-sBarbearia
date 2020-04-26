import React from 'react';
import './App.css';

//Components
import Header from './components/Header'
import Main from './components/Main'

//HOC Aux
import Aux from './components/hoc'

const App = () => {
    return (
        <Aux>
            <Header></Header>
            <Main></Main>
        </Aux>
    )
}

export default App;
