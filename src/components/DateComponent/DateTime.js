import React, { useState } from 'react';
import { Clock, DateComponent } from './Styles';

export const DateTime = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayName = days[today.getDay()];

    return (
        <DateComponent id="datetime">
            <Clock data-text={dayName}>{dayName}</Clock>
            <Clock data-text={time}>{time}</Clock>
            <Clock data-text={new Date().toLocaleDateString()}>{new Date().toLocaleDateString()}</Clock>
        </DateComponent>

    )
}