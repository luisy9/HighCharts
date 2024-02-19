import AreaChart from "./components/AreaChart"
import Cronometro from "./components/Cronometro"
// import DChart from "./components/DChart"
import Reloj from "./components/Reloj"
import RelojMundial from "./components/RelojMundial"
import Temporizador from "./components/Temporizador"
// import LeafletMaps from "./components/LeafletMaps"
// import Map from './components/Map';
// import { AdrPointer } from "./components/AdrPointer"
// import { MapaBicing } from "./components/MapaBicing"
// import ScatterChart from "./components/ScatterChart"

function App() {
  return (
    <>
      <div className="w-2/3 m-auto">
        {/* <Map /> */}
        {/* <MapaBicing /> */}
        {/* <AdrPointer /> */}
      </div>
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

        {/* leafleatMaps */}
        {/* <LeafletMaps /> */}
      </div>


    </>
  )
}

export default App
