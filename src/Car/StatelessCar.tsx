import React, {FunctionComponent} from 'react';

interface IProps {
    model: String;
}

export const StatelessCar: FunctionComponent<IProps> = ({ model }) => <div>Car {model}</div>;
