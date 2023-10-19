import { useState } from "react";
import Departamentos from "../src/assets/departamentos.json";
import Provincias from "../src/assets/provincias.json";
import Distritos from "../src/assets/distritos.json";
function App() {
  const [provincias, setProvincias]=useState([])
  const [distritos, setDistritos]=useState([])
  function onchangeDepartamento(e){
    setProvincias(e.target.value?Provincias[e.target.value]:[])
    setDistritos([])
  }
  function onchangeProvincia(e){
    setDistritos(e.target.value?Distritos[e.target.value]:[])
  }
  return (
    <div className="cardFlex">
      <select name="departamentos" id="departamentos"
      onChange={onchangeDepartamento}>
        <option value="">Departamentos</option>
        {Departamentos.map((data, key) => {
          return (
            <option key={key} value={data.id_ubigeo}>
              {data.nombre_ubigeo}
            </option>
          );
        })}
      </select>
      <select name="provincias" id="provincias"
      onChange={onchangeProvincia}>
        <option value="">Provincias</option>
        {provincias.map((data, key) => {
          return (
            <option key={key} value={data.id_ubigeo}>
              {data.nombre_ubigeo}
            </option>
          );
        })}
      </select>
      <select name="distritos" id="distritos">
        <option value="">Distritos</option>
        {distritos.map((data, key) => {
          return (
            <option key={key} value={data.id_ubigeo}>
              {data.nombre_ubigeo}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;
