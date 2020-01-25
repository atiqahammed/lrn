import React from 'react';
import './Avater.css';
import 'tachyons'

const Avater = (props) => {
    return (
            <div className="avater_style ma4 bg-light-purple dib pa4">
                <img src="https://joeschmoe.io/api/v1/atiq"></img>
                <h1>{props.name}</h1>
                <p>I am a junior developer</p>
            </div>
    )
}

export default Avater;