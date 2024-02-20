import { useEffect, useState } from 'react';

//Por defecto se ejecutara la zona horia de nuestra ubicacion con la zona horaria que tengamos por defecto
const actualDate = () => new Date().toLocaleTimeString()

export const RelojMundial = () => {

  //Array de objetos que tienen los nombres de las ciudades y de las zonas horarias.
  const zonasHorarias = [
    { ciudad: 'New York', offset: -5 },
    { ciudad: 'Tokyo', offset: 9 },
    { ciudad: 'Moscu', offset: 3 },
    { ciudad: 'Madrid', offset: 1 },
    { ciudad: 'Silicon Valley', offset: -8 },
  ];

  //Por defecto el state pondra la zona horaria de 8
  const [zonaHoraria, setZonaHoraria] = useState(8);
  const [hora, setHora] = useState(formata());

  //Funcion para añadir la diferencia horaria el state
  const changeHorario = (horario) => {
    setZonaHoraria(horario);
  }

  //Pondremos el formato de la hora
  function formata() {
    const hour = ((actualDate().slice(0, 2) * 1 + zonaHoraria * 1) % 24)
    const rest = actualDate().slice(2)
    const date = hour >= 0 ? (hour + '').padStart(2, '0') + rest : ((hour + 24) + '').padStart(2, '0') + rest;
    return date
  }

  //Actualizaremos la hora ejecutando el formata cada vez que se actualice el state por defecto
  //Y cada vez que se actualice el state de zonaHoraria
  const actualizar = () => setHora(formata());


  //El useEffect se ejecutara la primera vez y las vece que se cambie el useEffect.
  //Luego dentro haremos un setInterval para actualizar el setHora con la zona horaria seleccionada en el select.
  useEffect(() => {
    const interval = setInterval(actualizar, 1000);
    return () => clearInterval(interval);
  }, [zonaHoraria]);


  return (
    <div className='border-2 '>
      <h1>Reloj Mundial</h1>
      <h1 className="text-blue-500 text-2xl">{hora}</h1>
      {/* Hacemos un select para cambiar el horario mandando las horas de diferencia horaria */}
      <select id='' onChange={() => changeHorario(event.target.value)}>
        {zonasHorarias.map(e => {
          return (
            <>
              <option value={e.offset}>{e.ciudad}</option>
            </>
          )
        })}
      </select>
    </div>
  );

}

export default RelojMundial;