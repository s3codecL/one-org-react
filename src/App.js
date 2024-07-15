import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
    equipo: "Data Science",
    foto: "https://github.com/s3codecL.png",
    nombre: "Gustavo Andrade",
    puesto: "Development Operations"
  },
  {
    equipo: "Data Science",
    foto: "https://github.com/jonatanmelinao.png",
    nombre: "Jonatan Melinao",
    puesto: "Data Science"
  },
  {
    equipo: "Desarrollo",
    foto: "https://github.com/s3codecL.png",
    nombre: "Gustavo Andrade",
    puesto: "Development Operations"
  },
  {
    equipo: "Finanzas",
    foto: "https://github.com/jonatanmelinao.png",
    nombre: "Jonatan Melinao",
    puesto: "Data Science"
  }
])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

// Eliminar colaborador
const eliminarColaborador = (nombre) => {
  console.log("Eliminar colaborador", nombre)
  //Filter
}

  //Lista de equipos
  const equipos = [
    {
      titulo: "Desarrollo",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Operaciones",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Legal",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Finanzas",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Directiva",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]
  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
