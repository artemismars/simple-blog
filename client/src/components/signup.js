import React from "react";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import {
  Grid,
  Avatar,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const Signup = () => {
  const cardStyle = {
    padding: "30px 20px",
    width: 300,
    height: "",
    margin: "20px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { background: "green" };

  return (
    <Card elevation={20} style={cardStyle}>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <AddCircleOutlineOutlinedIcon />
        </Avatar>
        <h2 style={headerStyle}>Signup</h2>
        <Typography variant="caption">
          please fill this form to create an account.
        </Typography>
      </Grid>
      <form
        align="center"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <CardContent>
          <TextField
            required
            fullWidth
            label="Name"
            variant="standard"
            placeholder="Enter your name"
            margin="dense"
          />
          <TextField
            required
            fullWidth
            label="Email"
            variant="standard"
            type="email"
            placeholder="enter your email"
            margin="dense"
          />
          <TextField
            required
            fullWidth
            label="Password"
            variant="standard"
            placeholder="enter password"
            margin="dense"
            type="password"
            autoComplete="new-password"
          />
          <TextField
            required
            fullWidth
            label="Confirm password"
            variant="standard"
            placeholder="enter the same password"
            margin="dense"
            type="password"
            autoComplete="new-password"
          />
          <FormControl style={{ marginTop: 10, width: "100%" }}>
            <FormLabel
              id="demo-radio-buttons-group-label"
              style={{ textAlign: "initial" }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            style={{ flexGrow: "1" }}
          >
            Sign up
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default Signup;
