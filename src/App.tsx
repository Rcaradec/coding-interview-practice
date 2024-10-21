import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import { Button } from "@mui/material";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => setIsOpen(false);

  const modalChildren = (
    <div>
      <h3>Modal Content</h3>
      <p>Here is the content of the modal</p>
    </div>
  );

  const handleTriggerModal = () => setIsOpen(true);

  return (
    <>
      <Button onClick={handleTriggerModal} variant="outlined">
        Trigger Modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} children={modalChildren} />
    </>
  );
}

export default App;
