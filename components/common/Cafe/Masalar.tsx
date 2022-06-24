import Link from "next/link";
import React from "react";
import İmg from "../../../public/third-animate-img1.png";
import { Button, Icon, Image, Modal } from "semantic-ui-react";
import Menu from "./Modal/menu.tsx";

function Masalar() {
  const [open, setOpen] = React.useState(false);
  const [sepetOpen, setSepetOpen] = React.useState(false);
  return (
    <div>
      <div className="table-wrapper">
        <div className="table" onClick={() => setOpen(true)}>
          <p>Masa 1</p>
        </div>

        
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Header>Menü</Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            <Menu sepetOpen={sepetOpen} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)} primary>
            Proceed <Icon name="chevron right" />
          </Button>
          <Button onClick={() => setSepetOpen(true)} primary>
            Sepet <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Masalar;
