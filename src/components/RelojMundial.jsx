import React, { useEffect, useState } from 'react';

const horaActual = () => (new Date()).toLocaleString().split(' ')[1];

export const RelojMundial = () => {

  const [hora, setHora] = useState();
  const actualiza = () => setHora(horaActual());

  useEffect(() => {
    // const intervalo = setInterval();
    const intervalo = setInterval(actualiza, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const changeHorario = (horario) => {
    const hora1 = hora.slice(0, 2);
    const minutos = hora.slice(2, 9);
    const resultado = parseInt(hora1) + parseInt(horario);
    // console.log(resultado % 24);
    const horaResuelta = resultado % 24;
    console.log(horaResuelta + minutos);
  }

  return (
    <div className='border-2 '>
      <h1>Reloj Mundial</h1>
      <h1 className="text-blue-500 text-2xl">{hora}</h1>
      <select id='' onChange={() => changeHorario(event.target.value)}>
        <option value={18}>New York</option>
        <option value={8}>Tokyo</option>
        <option value={2}>Moscu</option>
        <option value={-6}>Madrid</option>
        <option value={-9}>Silicon Valley</option>
      </select>
    </div>
  );

}

export default RelojMundial;