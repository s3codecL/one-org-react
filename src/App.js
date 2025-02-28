import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    id: uuidv4(),
    equipo: "Directiva",
    foto: "https://github.com/s3codecL.png",
    nombre: "Gustavo Andrade",
    puesto: "Development Operations",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Directiva",
    foto: "https://github.com/jonatanmelinao.png",
    nombre: "Jonatan Melinao",
    puesto: "Data Science",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Desarrollo",
    foto: "https://github.com/FelipeGonzalezValderrama.png",
    nombre: "Felipe Gonzalez",
    puesto: "Full Stack Developer",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "DevOps",
    foto: "https://github.com/carlos-farias.png",
    nombre: "Ccarlos Farias",
    puesto: "DevOps Engineer",
    fav: false
  }
])

const [equipos, actualizarEquipos] = useState([
  {
    id: uuidv4(),
    titulo: "Desarrollo",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    id: uuidv4(),
    titulo: "Operaciones",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    id: uuidv4(),
    titulo: "DevOps",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    id: uuidv4(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    id: uuidv4(),
    titulo: "Legal",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    id: uuidv4(),
    titulo: "Finanzas",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    id: uuidv4(),
    titulo: "Directiva",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
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
const eliminarColaborador = (id) => {
  console.log("Eliminar colaborador", id)
  //Filter
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}

// Actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color, id)
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id) {
      equipo.colorPrimario = color
    }

    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

// Crear equipo
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
}

// Like
const like = (id) => {
  console.log("Like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if (colaborador.id === id) {
      colaborador.fav = !colaborador.fav
    }
    return colaborador  
  })

  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
