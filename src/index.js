import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav';
import CardContainer from './card-container';
import RandomQuote from './randon-quote';


const App = () => {
    return(
            <div>
                <Nav/>
                <CardContainer/>
                <RandomQuote/>
            </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));