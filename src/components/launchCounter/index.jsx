import React, { useEffect, useState } from 'react';


import { numberWithZeroPrefix } from '../../utils/numberUtil';


const LaunchCounter = ({ launchDate }) => {

    const interval = 1000;

    const countDownDate = new Date(launchDate).getTime()
    const currentDate = new Date().getTime();

    const calculateTimeLeft = () => {

        const distance = countDownDate - currentDate;

        let timeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' };

        if (distance > 0) {
            timeLeft.days = numberWithZeroPrefix(Math.floor(distance / (1000 * 60 * 60 * 24)));
            timeLeft.hours = numberWithZeroPrefix(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            timeLeft.minutes = numberWithZeroPrefix(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            timeLeft.seconds = numberWithZeroPrefix(Math.floor((distance % (1000 * 60)) / 1000));
        }
        return timeLeft;
    }


    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, interval);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    if (!timeLeft) {
        return 'Loading';
    }

    return (
        <>
            T- {timeLeft.days} <small>d</small> : {timeLeft.hours} <small>h</small> : {timeLeft.minutes} <small>m</small>: {timeLeft.seconds} <small>s</small>
        </>
    )
}

export default LaunchCounter