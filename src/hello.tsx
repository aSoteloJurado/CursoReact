import * as React from 'react';

interface Props {
    userName : String;
}

export const HelloComponent = (props : Props) => 
    <h2>Hello Component {props.userName}!</h2>
