import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Demo from './Demo'
import Avater from './Avatar'

ReactDOM.render(<div>
                    <Avater id="1" name="Atiq Ahammed"/>
                    <Avater id="2" name="Shamim Ahammed"/>
                    <Avater id="3" name="Ahammed Shamim"/>
                    <Avater id="4" name="Ahammed Atiq"/>
                </div>, 
                        document.getElementById('root'));
// ReactDOM.render(<Demo />, document.getElementById('demo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
