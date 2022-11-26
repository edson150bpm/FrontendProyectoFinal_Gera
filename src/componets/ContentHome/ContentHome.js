import React from "react";
import CardComponet from "./CardComponent";
import Container from "react-bootstrap/Container";
import "./ContentHome.css";

export default function ContentHome() {
  return (
    <Container className="ContentHome">
      <CardComponet />
      <CardComponet />
      <CardComponet />
      <CardComponet />
      <CardComponet />
      <CardComponet />
      <CardComponet />
      <CardComponet />
    </Container>
  );
}
