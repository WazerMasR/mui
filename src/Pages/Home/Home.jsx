import React, { useEffect, useState } from "react";
import "./Home.css";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Home = () => {
  const [mydata, setMyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, []);


  // Delete Items
  const handeleDelete = (item) => {
    fetch(`http://localhost:3100/mydata/${item.id}`, {
      method: "DELETE",
    });
    const newArr = mydata.filter((obj) => {
      return obj.id !== item.id
    });
    setMyData(newArr);
  }


  let totalPrice = 0;
  return (
    <Box>
      {mydata.map((item) => {
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              pt: "27px",
              pb: "7px",
              mb: "15px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              ${item.price}
            </Typography>
            <IconButton
              onClick={() => {
                handeleDelete(item)
              }
              }
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <CloseIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography sx={{ textAlign: "center", mt: "40px" }} variant="h6">
        👉 You Spend: ${totalPrice}
      </Typography>
    </Box>
  );
};

export default Home;
