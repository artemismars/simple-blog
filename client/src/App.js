import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Main from "./pages/Main";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import NavBar from "./components/navbar";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateAreas: `
        "header header header header"
        "main main main main"
        `,
        bgcolor: "background.default",
        height: "100%",
        color: "text.primary",
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        <NavBar theme={theme} colorMode={colorMode} />
        <Card>
          <CardHeader>Portfolio Blog App</CardHeader>
          <CardContent>
            <h1>Explore the world</h1>
          </CardContent>
        </Card>
      </Box>

      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${mode})`);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App theme={theme} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
