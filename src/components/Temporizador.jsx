import { useEffect, useState } from "react"

const Temporizador = () => {

  const [play, setPlay] = useState(false);
  const [sec, setSec] = useState(0);

  const formata = (seconds) => {
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let interval;
    if (play) {
      interval = setInterval(() => setSec(sec => {
        if (sec > 0) {
          return sec - 1;
        }
        return 0;
      }), 1000)
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval)
  }, [sec, play]);


  return (
    <>
      <div className='border-2 rounded-lg'>
        {/* <div className=''> */}
        <h1>Temporizador</h1>
        {/* <h1 className={`text-${color}-500 text-2xl`}>{formata(secs)}</h1> */}
        <br />
        <div className='flex justify-center gap-5'>
          <button className="border rounded-lg p-4 bg-green-300" onClick={() => setSec(sec + 10)}>+</button>
          {formata(sec)}
          <button className='border rounded-lg p-4 bg-green-300' onClick={() => setSec(sec => {
            if (sec > 0) {
              return sec - 10;
            } else {
              return sec
            }
          })}>-</button>
        </div>
        <div className="flex justify-center">
          <button className="mt-5 border rounded-lg p-4 bg-blue-300" onClick={() => setPlay(!play)}>Iniciar</button>
        </div>

        {/* </div> */}
      </div>
    </>
  )
}

export default Temporizador
