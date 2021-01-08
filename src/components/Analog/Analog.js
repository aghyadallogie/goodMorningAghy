import React, { useState, useEffect } from 'react';

export const Analog = () => {

    const [date, setDate] = useState({});

    useEffect(() => {
        let timeInterval = setInterval(() => {
            updateDate();
        }, 1000);
        return () => {
            clearInterval(timeInterval);
        }
    }, [])

    const getDate = () => {
        var newDate = new Date();
        var date = {};
        date.hours = newDate.getHours();
        date.minutes = newDate.getMinutes();
        date.seconds = newDate.getSeconds();
        return date;
    }

    const updateDate = () => {
        setDate(getDate());
    }

    const updateClock = () => {
        let angleSeconds = date.seconds
        let angleMinutes = date.minutes * 6;
        let angleHours = (date.hours / 12) * 360;
        document.getElementById('js-hours').style.transform = "translate(-50%, -100%) rotate(" + angleHours + "deg)";
        document.getElementById('js-seconds').style.transform = "translate(-50%, -100%) rotate(" + angleSeconds + "deg)";
        document.getElementById('js-minutes').style.transform = "translate(-50%, -100%) rotate(" + angleMinutes + "deg)";
    }

    return (
        <div className="c-clock">
            <div id="js-hours" className="c-clock__tick c-clock__tick--hours"
                style={{ transform: "translate(-50%, -100%) rotate(" + (date.hours / 12) * 360 + "deg)" }}></div>

            <div id="js-minutes" className="c-clock__tick c-clock__tick--minutes"
                style={{ transform: "translate(-50%, -100%) rotate(" + date.minutes * 6 + "deg)" }}></div>

            <div id="js-seconds" className="c-clock__tick c-clock__tick--seconds"
                style={{ transform: "translate(-50%, -100%) rotate(" + date.seconds + "deg)" }}></div>
        </div>
    )
}