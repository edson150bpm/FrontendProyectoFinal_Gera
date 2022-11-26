import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardComponet() {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>Programacion Imperativa</Card.Title>
        <Card.Text>
          Aqui va la descripcion del curso que se jalara de la base de datos
          Aqui va la descripcion del curso que se jalara de la base de datos
          Aqui va la descripcion del curso que se jalara de la base de datos
        </Card.Text>
        <Button variant="primary">Ir al curso</Button>
      </Card.Body>
    </Card>
  );
}
