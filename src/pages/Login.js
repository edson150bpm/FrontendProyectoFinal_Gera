import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoPotato from "../img/potato.png";
import "./Login.css";

export default function Login() {
  return (
    <div className="content_login">
      <div className="LoginContent">
        <div className="Img_Content">
          <img
            className="logoPotato"
            src={logoPotato}
            alt="LogoPotato"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          {/* aqui va el contenido */}
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="TextInput">User</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Ingresa el nombre de usuario"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="TextInput">Password</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Ingresa la contraseña"
                />
              </Form.Group>
              <Button type="submit" style={{ width: "100%" }}>
                Iniciar Sesion
              </Button>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
}
