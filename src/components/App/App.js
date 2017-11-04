import React from 'react';

import '../../styles/main.scss';
import Wrapper from '../../containers/Wrapper';

const App = () => (
    <div className="app">
        <header className="hero is-info">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                    Stock Challenge
                    </h1>
                    <h2 className="subtitle">
                    App baseado no stock challenge criado pelo Danilo Rosa
                    </h2>
                </div>
            </div>
        </header>
        <Wrapper />
    </div>
);

export default App;
