import React from 'react';

interface IProps {
    model: String;
    doors: Number;
    isElectric: Boolean;
}

export class Car extends React.Component<IProps, {model: String, doors: Number, isElectric: Boolean}> {
    model: String;
    doors: Number;
    isElectric: Boolean;
    constructor(props: IProps) {
        super(props);
        this.model = props.model;
        this.doors = props.doors;
        this.isElectric = props.isElectric;
    }

    render() {
        return <div>Car</div>
    }
}