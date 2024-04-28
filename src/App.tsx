import './App.css'
import FormRegister from './components/FormRegister'
import Header from './components/Header'
import { Box } from '@mui/material'
import UserStorage from './contexts/useContext'

function App() {

  return (
    <Box>
      <Header />
      <UserStorage>
        <FormRegister />
      </UserStorage>
    </Box>
  )
}

export default App
