import React, { useEffect, useState }  from "react";
import Button from "react-bootstrap/Button";
import CardComponet from "../componets/ContentHome/CardComponent";
import axios from "axios";
import Container from "react-bootstrap/Container";
import ContentModal from "../componets/ContentModal/ContentModal";
import { Link } from "react-router-dom"
import "./RegistroCurso.css";

export default function RegistroCurso(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [courses, setCourses] = useState([])

  const getDataHome = async () => {
    const cursos = await axios.get("http://localhost:4000/api-v1/home")
    const curseDatabase = cursos.data.data;
    setCourses(curseDatabase)


  }
  useEffect(() => {
    getDataHome()
  }, [])
  return (
    <Container className="RegistroCurso">
      <div>
        <div className="ButtonAdd">
          <Button onClick={() => {
            setModalShow(true)
          }} variant="success" style={{margin: "1px"}}>Añadir curso</Button>
          <Link to={"/"}>
          <Button variant="success" style={{margin: "1px"}}>
            Volver
          </Button>
          </Link>
        </div>
        <div className="Card_Component">
          {
            courses.map((course) => {
              console.log(course)
              return <CardComponet course={course} />
            })
          }
        </div>
      </div>
      <ContentModal show={modalShow} onHide={() => setModalShow(false)} />

    </Container>
  );
}
