import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styled from "@emotion/styled";
import { purple } from "@mui/material/colors";

import(
  "https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
);
import("https://fonts.googleapis.com/css2?family=Hurricane&display=swap");

const NavBar = ({ theme, colorMode }) => {
  const GetStartedButton = styled(Button)(({ theme }) => ({
    color:
      theme.palette.mode === "light"
        ? "#fafafa"
        : theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.mode === "light" ? "#212121" : purple[500],
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "#212121" : purple[500],
    },
  }));
  return (
    <AppBar
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        boxShadow: 1,
        padding: "5px",
        bgcolor: theme.palette.mode === "light" ? "#fafafa" : "#212121",
        color:
          theme.palette.mode === "light" ? "#212121" : "Background.default",
        zIndex: 10,
      }}
      position="fixed"
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          fontFamily="'Hurricane', cursive"
        >
          SimpleBlog
        </Typography>
        <GetStartedButton
          variant="contained"
          disableElevation
          sx={{
            borderRadius: "16px",
            textTransform: "none",
            fontFamily: "'Merriweather', serif",
          }}
        >
          Get Started
        </GetStartedButton>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
