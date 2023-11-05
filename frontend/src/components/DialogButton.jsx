import { useState } from "react";
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
function DialogButton({ buttonText, modalTitle }) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className='!p-0 !m-0 !rounded-full' alt='Click for Instructions' title="Click Me!">
        {buttonText}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{modalTitle}</DialogHeader>
        <DialogBody className="text-black">
          <p className="font-sans pb-3">Welcome to Nauti(cal) Phrases!</p>
          <p className="font-sans py-3">We are a group of hackers from Stevens Institute of Technology made up of Computer Science and Computer Engineering students. Our diverse background lended to our ability to create this hack, as it incorporates not only computer science principles but also engineering principles.</p>
          <p className="font-sans pt-3">In order to navigate around the site try clicking any of the buttons on the side of the 3D viewer, each of these buttons will show you a different part of the boat. You’re also able to move around the 3D viewer with your right click, scroll wheel and left click. If you want to see the normal english translation of the words select them in the list translation below. Happy Learning! ⛵</p>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="primary" onClick={handleOpen}>
            <span className="font-sans">Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

DialogButton.propTypes = {
	buttonText: PropTypes.any.isRequired,
}

export default DialogButton;