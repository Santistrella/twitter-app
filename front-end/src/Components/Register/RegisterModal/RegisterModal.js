import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MultipleStepForm from "../MultipleStepForm/MultipleStepForm";

export const RegisterModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className="registerButton"
      >
        Regístrate
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Regístrate</DialogTitle>
        <DialogContent>
          <MultipleStepForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};
