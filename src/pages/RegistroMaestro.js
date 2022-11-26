import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logoPotato from "../img/potato.png";
import "./RegistroMaestro.css";

export default function RegistroMaestro() {
  return (
    <div className="Content_Registrer">
      <div>
        <div className="RegistrerMaestro">
          <div className="Img_Content">
            <img
              className="logoPotato"
              src={logoPotato}
              alt="LogoPotato"
              style={{ width: "100%" }}
            />
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="email" placeholder="Ingresa la contraseña" />
            </Form.Group>
            <Button type="submit" style={{ width: "100%" }}>
              Iniciar Sesion
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
