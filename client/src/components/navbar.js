import { Card, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const NavBar = ({ theme, colorMode }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        boxShadow: 1,
        bgcolor:
          theme.palette.mode === "light" ? "#fafafa" : "background.default",
        padding: "5px",
      }}
    >
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
    </Card>
  );
};

export default NavBar;
