import React, { useState } from "react";
import "./Create.css";
import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import { blue } from "@mui/material/colors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[700]),
  backgroundColor: theme.palette.neutral.main,
  "&:hover": {
    backgroundColor: theme.palette.neutral.main,
  },
}));
const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  return (
    <Box autoComplete="off" component="form" sx={{ width: "380px" }}>
      <TextField
        onChange={(el) => {
          setTitle(el.target.value);
        }}
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">💙</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
      <TextField
        onChange={(el) => {
          setPrice(Number(el.target.value));
        }}
        fullWidth
        label=" Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />
      <ColorButton
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, price }),
          }).then(() => {
            navigate("/");
          });
        }}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit
        <ChevronRightIcon />
      </ColorButton>
    </Box>
  );
};

export default Create;
