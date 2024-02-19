import { useEffect, useState } from 'react';

export const RelojMundial = () => {

  const horaActual = (resultadoHoraFinal) => {
    if (resultadoHoraFinal) {
      const horaPais = changeHorario(resultadoHoraFinal);
      return horaPais;
    }
    return new Date().toLocaleString().split(' ')[1];
  }

  const [hora, setHora] = useState(horaActual());
  const actualizar = () => setHora(horaActual());

  useEffect(() => {
    const interval = setInterval(actualizar, 1000);
    return () => clearInterval(interval);
  }, [hora]);

  const changeHorario = (horario) => {
    const hora1 = hora.slice(0, 2);
    const minutos = hora.slice(2, 9);
    const resultado = parseInt(hora1) + parseInt(horario);
    const horaResuelta = resultado % 24;
    const resultadoHoraFinal = horaResuelta + minutos;

    return resultadoHoraFinal;
  }

  return (
    <div className='border-2 '>
      <h1>Reloj Mundial</h1>
      <h1 className="text-blue-500 text-2xl">{hora}</h1>
      <select id='' onChange={() => horaActual(event.target.value)}>
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