import { memo, ReactNode, useRef } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  border-radius: 12px;
  padding: 100px;
`;

const MemoizedModal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  return isOpen
    ? createPortal(
        <StyledModal
          ref={modalRef}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <div onClick={(e) => e.stopPropagation()}>
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </StyledModal>,
        document.body
      )
    : null;
};

const Modal = memo(MemoizedModal);

export default Modal;
