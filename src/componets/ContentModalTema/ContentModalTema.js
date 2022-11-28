import React, { useRef, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import swal from 'sweetalert';
import { Editor } from '@tinymce/tinymce-react';

export default function ContentModalTema(props) {
  const editorRef = useRef(null);
  const logTema = () => {
  };
  const [dataModalTema, setDataModalTema] = useState({
    nombre: "",
    descripcion: ""
  })

  const editDataModalTema = (event) => {
    setDataModalTema({
      ...dataModalTema,
      [event.target.name]: event.target.value
    })
  }

  const sentDataModalTema = async (event) => {
    try {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
        const cursoActual = JSON.parse(localStorage.getItem("cursoActual"))
        console.log(cursoActual)
        const saveModalTema = await axios.post("http://localhost:4000/api-v1/registro/tema", {
          nombreTema: dataModalTema.nombre,
          contenido: editorRef.current.getContent,
          id_curso: cursoActual.id_curso
        })
        props.onHide()
        swal("Buen trabajo!", "Tus datos se enviaron correctamente", "success");
      } else {
        swal("Lo sentimos", "Datos incorrectos", "error");
      }
    } catch (error) {
      console.log("Error", error)
      swal("Lo sentimos", "Datos incorrectos", "error");
    }
  }

  const editTema = (event) => {
    console.log(event.target.value)
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Añade el tema
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="email"
              name="nombre"
              placeholder="Ingresa solo letras"
              autoFocus
              onChange={(event) => {
                editDataModalTema(event)
              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion</Form.Label>
            <Editor
              tagName='descripcion'
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Cancelar
        </Button>
        <Button variant="dark" onClick={() => {
          sentDataModalTema()
        }}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
