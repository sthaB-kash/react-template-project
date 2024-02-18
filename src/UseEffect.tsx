import { useEffect, useState } from "react";

export default function UseEffect() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return(
        <div>
            <h1>UseEffect</h1>
            <p>Seconds : <strong>{time}</strong></p>
            <hr/>
        </div>
    );
}