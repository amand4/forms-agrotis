import { AppBar, Toolbar } from '@mui/material';

import logo from '../../assets/images/logo-agrotis.png';

const Header = () => {
  return (
    <AppBar
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '40px',
        gap: '0px',
        opacity: '0.8',
        boxShadow: '0px 1px 3px 0px #00000042',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Toolbar>
        <img
          src={logo}
          alt="Logo Agrotis"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
