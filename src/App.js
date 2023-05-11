import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import AddPost from './components/AddPost';
import Feed from './components/Feed';
import LeftBar from './components/LeftBar';
import Navbar from './components/Navbar';
import RightBar from './components/RightBar';


function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme ({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        
        <Navbar/>

        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBar/>
          <Feed/>
          <RightBar mode={mode} setMode={setMode}/>
        </Stack>

        <AddPost/>

      </Box>
    </ThemeProvider>
  );
}

export default App;
