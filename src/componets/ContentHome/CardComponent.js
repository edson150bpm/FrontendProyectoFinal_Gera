import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

export default function CardComponet(props) {

  const navegation = useNavigate()
  const sentDataTema = async (event) => {
    try {

      localStorage.setItem("cursoActual", JSON.stringify(props.course))
      navegation("/registro-temas")
    } catch (error) {
      console.log("Error", error)
      swal("Lo sentimos", "Datos incorrectos", "error");
    }
  }
  console.log(props.course.id_curso)
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{props.course.nombreCurso}</Card.Title>
        <Card.Text>
          {props.course.descripcion_curso}
        </Card.Text>
        <Button variant="primary" style={{ width: "100%" }}
          onClick={() => {
            sentDataTema()
          }}>
          Ir al curso
        </Button>
      </Card.Body>
    </Card>
  );
}
