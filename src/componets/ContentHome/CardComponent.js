import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

export default function CardComponet({ course, origin = "home" }) {


  const navegation = useNavigate()
  const sentDataTema = async (event) => {
    try {

      localStorage.setItem("cursoActual", JSON.stringify(course))
      navegation("/registro-temas")
    } catch (error) {
      console.log("Error", error)
      swal("Lo sentimos", "Datos incorrectos", "error");
    }
  }
  console.log(course.id_curso)
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{course.nombreCurso}</Card.Title>

        <Card.Text>
          {course.descripcion_curso}
        </Card.Text>
        {
          origin === "home" ? (
            <Button variant="primary" style={{ width: "100%" }}>
              Ver tema
            </Button>
          ) : (
            <Button variant="primary"
              style={{ width: "100%" }}
              onClick={() => {
                sentDataTema()
              }}>
              Ir a temas
            </Button>
          )
        }

      </Card.Body>
    </Card>
  );
}
