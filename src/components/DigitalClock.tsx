import {useEffect, useState} from 'react'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    const padZero = (num : number) => num < 10 ? `0${num}` : num;

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
    
        return () => {
            clearInterval(interval)
        }
    }, [])
    
  return (
    <div>
        <h1>Digital Clock</h1>
        <h3>{formatTime()}</h3>
        <hr/>
    </div>
  )
}

export default DigitalClock