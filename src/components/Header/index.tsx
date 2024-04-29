import { AppBar } from '@mui/material';
import logo from '../../assets/images/logo-agrotis.png';
import { containerHeaderStyles } from './styles';

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ ...containerHeaderStyles }}
    >
      <img
        src={logo}
        alt="Logo Agrotis"
      />
    </AppBar>
  );
};

export default Header;
