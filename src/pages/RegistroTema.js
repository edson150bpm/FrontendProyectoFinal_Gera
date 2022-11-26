import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ContentModalTema from "../componets/ContentModalTema/ContentModalTema";
import "./RegistroTema.css";

export default function RegistroTema(){
    const [modalShow, setModalShow] = React.useState(false)
    return(
        <Container>
        <div>
          <div className="ButtonAdd">
            <Button onClick={()=>{
              setModalShow(true)
            }} variant="success">Añadir tema</Button>
          </div>
          <div className="Card_Component">
            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Body>
                <Card.Title>Programacion Imperativa</Card.Title>
                <Card.Text>
                  Aqui va la descripcion del curso que se jalara de la base de
                  datos Aqui va la descripcion del curso que se jalara de la base
                  de datos Aqui va la descripcion del curso que se jalara de la
                  base de datos
                </Card.Text>
                <Button variant="secondary" style={{ width: "100%" }}>
                  Ir al curso
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <ContentModalTema show={modalShow} onHide={() => setModalShow(false)} />
  
      </Container>
    )
}