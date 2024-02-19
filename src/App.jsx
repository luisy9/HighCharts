import AreaChart from "./components/AreaChart"
import Cronometro from "./components/Cronometro"
// import DChart from "./components/DChart"
import Reloj from "./components/Reloj"
import RelojMundial from "./components/RelojMundial"
import Temporizador from "./components/Temporizador"
// import ScatterChart from "./components/ScatterChart"

function App() {
  return (
    <>
      <div className="grid grid-cols-1">
        <AreaChart />
        {/* <ScatterChart /> */}

        {/* Reloj */}
      </div>

      <div className="grid grid-cols-4 h-96">
        <Reloj />

        {/* Cronometro */}
        <Cronometro />

        {/* Temporizador */}
        <Temporizador />

        {/* Reloj Mundial */}
        <RelojMundial />
        {/* <DChart /> */}
      </div>
    </>
  )
}

export default App
