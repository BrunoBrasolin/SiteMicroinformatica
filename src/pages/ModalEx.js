import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
class ModalEx extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <Button variant="dark" onClick={() => this.handleModal()}>
          Open Modal
        </Button>
        <Modal show={this.state.show} className="modalex">
          <Modal.Header closeButton>
            <h3>
              "Faça um algoritmo que entre com 3 valores e gere a equação de 2º
              grau, verifique as possíveis raízes."
            </h3>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="number"
              id="a"
              placeholder="Digite o valor de a"
            />
            <Form.Control
              type="number"
              id="b"
              placeholder="Digite o valor de b"
            />
            <Form.Control
              type="number"
              id="c"
              placeholder="Digite o valor de c"
            />
            <Button variant="outline-light">Calcular</Button>
          </Modal.Body>
          <Modal.Footer>
            <p>
              Sua equação é: <span id="a1">a</span>x² + <span id="b1">b</span> x
              +<span id="c1">c</span> = 0
            </p>
            <p>
              O valor de Delta é: <span id="saidaDelta"></span>
            </p>
            <span id="saida"></span>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModalEx;
