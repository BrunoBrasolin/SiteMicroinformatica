import React from "react";
import { Button, Modal } from "react-bootstrap";
class ModalEx extends React.Component {
  ex() {
    return (
            <>
        <Button variant="secondary" onClick={() => this.handleModal()}>
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
            <input type="number" id="a" placeholder="Digite o valor de a" />
            <input type="number" id="b" placeholder="Digite o valor de b" />
            <input type="number" id="c" placeholder="Digite o valor de c" />
            <button>Calcular</button>
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
            <Button onClick={() => this.handleModal()}>Fechar Modal</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
export default ModalEx;
