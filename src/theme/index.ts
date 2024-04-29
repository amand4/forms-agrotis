import { createTheme } from '@mui/material/styles';

import palette from './palette'
import typography from './typography'

const theme = createTheme({
  typography,
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          lineHeight: '14px',
          letterSpacing: '0.5px',
          fontSize: '14px',
          padding: '11px',
          '&:hover': {
            backgroundColor: palette.secondary.main
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '24px',
        }
      },
    },
  },
});

export default theme;
