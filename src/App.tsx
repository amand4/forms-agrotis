import { Box, ThemeProvider } from '@mui/material'

import FormRegister from './components/FormRegister'
import Header from './components/Header'
import theme from './theme'

function App() {

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Header />
        <FormRegister />
      </ThemeProvider>
    </Box>
  )
}

export default App;
