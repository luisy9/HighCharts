import { useEffect, useState } from 'react';

const formata = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const Cronometro = () => {
    const [secs, setSecs] = useState(0);
    const [play, setPlay] = useState(true)

    useEffect(() => {
        let interval;
        if (play) {
            interval = setInterval(() => setSecs(secs + 1), 1000)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [secs, play]);

    //text-green-500 text-red-500
    const color = play ? "green" : "red"

    return (
        <>
            <div className='border-2 rounded-lg'>
                {/* <div className=''> */}
                    <h1>Cronometro</h1>
                    <h1 className={`text-${color}-500 text-2xl`}>{formata(secs)}</h1>
                    <br />
                    <div className='flex gap-5'>
                        <button className="border rounded-lg p-4 bg-green-300" 
                        onClick={() => setPlay(!play)}>Start/Stop</button>
                        <button className='border rounded-lg p-4 bg-green-300' 
                        onClick={() => setSecs(0)}>Reset</button>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Cronometro;