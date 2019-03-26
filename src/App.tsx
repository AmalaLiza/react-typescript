import React, {Component} from 'react';
import './App.css';
import {Car} from './Car/Car';
import {StatelessCar} from "./Car/StatelessCar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Car
                    model="1.12"
                    doors={4}
                    isElectric
                />
                <StatelessCar
                    model="1.12"
                />
            </div>
        );
    }
}

export default App;
