import React, { useState, useEffect } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';

interface MessageSnackbarProps {
  message: string;
  severity: AlertProps['severity'];
}

const MessageSnackbar: React.FC<MessageSnackbarProps> = ({ message, severity }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = (event: React.SyntheticEvent | MouseEvent<Element, MouseEvent>, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const icon = severity === 'success' ? <CheckIcon /> : <WarningIcon />;

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={severity}
        sx={{ width: '100%' }}
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        icon={icon}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageSnackbar;
