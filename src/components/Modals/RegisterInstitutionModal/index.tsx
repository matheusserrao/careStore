import Modal from "react-modal";
import styled from "styled-components";
import "./modal.css";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function RegisterInstitutionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalContent>
        <input placeholder="Nome da instituição" />
        <input placeholder="Email" />
        <input placeholder="Senha" type="password"/>
        <input placeholder="Confirmar senha" />
        <input placeholder="Causa social" />
        <span>
          <a href="">Esqueci a senha</a>
        </span>
        <Button>CADASTRAR</Button>
      </ModalContent>
    </Modal>
  );
}

const Button = styled.button`
  background: #4dc6a9;
  width: 100%;
  padding: 10px;
  margin: 20px;
  font-size: 1.2rem;
  color: #fff;
  border: none;
  height: 5vh;
  border-radius: 6px;
  &:hover {
    filter: brightness(0.8);
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
