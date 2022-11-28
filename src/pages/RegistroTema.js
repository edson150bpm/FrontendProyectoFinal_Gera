import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CardComponet from "../componets/ContentModalTema/CardComponentModal";
import axios from "axios";
import Container from "react-bootstrap/Container";
import ContentModalTema from "../componets/ContentModalTema/ContentModalTema";
import { Link } from "react-router-dom"
import "./RegistroTema.css";

export default function RegistroTema(props) {
  const [modalShow, setModalShow] = React.useState(false)
  const [temas, setTemas] = useState([])

  const getDataTema = async () => {
    try {
      const temaActual = JSON.parse(localStorage.getItem("cursoActual"))
      console.log(temaActual.id_curso)
      const tems = await axios.get("http://localhost:4000/api-v1/registro/tema", {
        id_curso: temaActual.id_curso
      })

      const temasDatabase = tems.data.data;
      setTemas(temasDatabase)
    } catch (error) {
      console.log(error, "error")
    }



  }

  useEffect(() => {
    getDataTema()
  }, [])
  return (
    <Container className="RegistroTema">
      <div>
        <div className="ButtonAdd">
          <Button onClick={() => {
            setModalShow(true)
          }} variant="success" style={{ margin: "1px" }}>Añadir tema</Button>
          <Link to={"/"}>
            <Button variant="success" style={{ margin: "1px" }}>
              Volver
            </Button>
          </Link>
        </div>
        <div className="Card_Component">
          {
            temas.map((temacurso) => {
              console.log(temacurso)
              return <CardComponet temacurso={temacurso} />
            })
          }
        </div>
      </div>
      <ContentModalTema show={modalShow} onHide={() => setModalShow(false)} />

    </Container>
  )
}