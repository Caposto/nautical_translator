import { useState } from "react";
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
function DialogButton({ buttonText, content, modalTitle }) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className='!p-0 !m-0 !rounded-full'>
        {buttonText}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{modalTitle}</DialogHeader>
        <DialogBody className="text-black">
          {content}
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
	content: PropTypes.string.isRequired,
}

export default DialogButton;