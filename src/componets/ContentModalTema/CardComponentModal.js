import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import swal from 'sweetalert';
import { ContenidoTema } from "../../pages/ContenidoTema";
import ContentModalTema from "./ContentModalTema";

export default function CardComponetModal(props) {
  const sesion = JSON.parse(localStorage.getItem("user"));
  const [modalShow, setModalShow] = React.useState(false);
  const [editData, setEditData] = React.useState({});
  const [loadign, setLoadign] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [modalShowDelete, setModalShowDelete] = React.useState(false);
  const [edit, setEdit] = useState(false);

  const sentDataModalTemaDelete = async (event) => {
    try {
      const cursoActual = JSON.parse(localStorage.getItem("cursoActual"))
      console.log(props.temacurso?.id_tema)
      const deleteTema = await axios.delete(`http://localhost:4000/api-v1/registro/tema/${props.temacurso?.id_tema}`)
      console.log('deleteTema', deleteTema)
      props.setLoadign(true);
      swal("Buen trabajo!", "Tus datos se enviaron correctamente", "success");
    } catch (error) {
      swal("Lo sentimos", "Datos incorrectos", "error");
    }
  }

const onHide = () => setShow (false);

  const editarTema = (tema) => {
    setEdit(true);
    setEditData(tema);
    setShow(true)
  }
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{props.temacurso.nombreTema}</Card.Title>
        <Card.Text>
          {props.temacurso.contenido}
        </Card.Text>
        {sesion ? (
          <>
            <Button variant="primary" style={{ width: "100%" }} onClick={() => editarTema(props.temacurso)}>
              Editar
            </Button>
            <Button variant="danger" style={{ width: "100%", marginTop: 6 }} onClick={() => setModalShowDelete(!modalShowDelete)}>
              Eliminar
            </Button>
          </>
        ) : (
          <Button variant="primary" style={{ width: "100%" }} onClick={() => setModalShow(true)}>
            Ver tema
          </Button>
        )}
      </Card.Body>

      {/* <ContenidoTema
        show={modalShow}
        titulo={props.temacurso?.nombreTema}
        contenido={props.temacurso?.contenido}
        onHide={() => setModalShow(false)}

      /> */}
       <ContentModalTema
       setLoadign = {setLoadign}
       onHide = {onHide}
       show={show}
       editData={editData}
       edit={edit}
       />

      <Modal show={modalShowDelete} onHide={() => setModalShowDelete(!modalShowDelete)}>
        <Modal.Body>Estas seguro que desea eliminar</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => {
            setModalShowDelete(!modalShowDelete)
            sentDataModalTemaDelete()
          }}>
            Aceptar
          </Button>
          <Button variant="danger" onClick={() => setModalShowDelete(!modalShowDelete)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>

    </Card>
  );
}