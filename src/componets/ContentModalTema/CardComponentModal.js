import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardComponet(props) {
  console.log(props.temacurso.id_tema)
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{props.temacurso.nombreTema}</Card.Title>
        <Card.Text>
         {props.temacurso.contenido}
        </Card.Text>
        <Button variant="primary" style={{ width: "100%" }}>
          Ir al curso
          </Button>
      </Card.Body>
    </Card>
  );
}