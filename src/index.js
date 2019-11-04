import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Leet(props) {
    /*
        A => 4
        E => 3
        G => 6
        L => 1
        O => 0
        S => 5
        T => 7
    */
    var leet = props.name;
    var lengthOfProps = props.name.length;
    for (var i = 0; i < lengthOfProps; i++) {
        leet = leet.replace('A', '4');
        leet = leet.replace('a', '4');
        leet = leet.replace('E', '3');
        leet = leet.replace('e', '3');
        leet = leet.replace('G', '6');
        leet = leet.replace('g', '6');
        leet = leet.replace('L', '1');
        leet = leet.replace('l', '1');
        leet = leet.replace('O', '0');
        leet = leet.replace('o', '0');
        leet = leet.replace('S', '5');
        leet = leet.replace('s', '5');
        leet = leet.replace('T', '7');
        leet = leet.replace('t', '7');
    }
    return <h1 > { leet } < /h1>
}

const element = < Leet name = "Steven" / > ;
ReactDOM.render(element, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();